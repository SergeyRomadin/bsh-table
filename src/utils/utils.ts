import { RootState } from "../app/store";
import { IAuditOfActionsState } from "../features/Redux/auditOfActionsSlice";
import { TOrder, TKeyofMockData, TMockData, IStateType } from "./types";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(
    order: TOrder,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export const visibleRows = (
    rows: [],
    order: TOrder,
    orderBy: TOrder,
    page: number,
    rowsPerPage: number
) =>
    stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

export const sortedRows = (
    rows: TMockData[],
    order: TOrder,
    orderBy: TKeyofMockData,
    page: number,
    rowsPerPage: number
): TMockData[] =>
    stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

export function filteredActionsList(
    state: IAuditOfActionsState
): TMockData[] | null {
    const {
        urlFilterValue,
        userFilterValue,
        methodFilterValue,
        searchFilterValue,
        statusFilterValue,
        actionsList,
    } = state;

    if (!actionsList || actionsList.length === 0) return null;

    return actionsList.filter((item) => {
        const search = (el: TMockData) => {
            let key: TKeyofMockData;
            for (key in el) {
                if (
                    el[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchFilterValue.toString().toLowerCase())
                ) {
                    return true;
                }
            }
        };

        if (urlFilterValue && urlFilterValue !== item.url) {
            return false;
        }

        if (userFilterValue && userFilterValue !== item.user) {
            return false;
        }

        if (methodFilterValue && methodFilterValue !== item.method) {
            return false;
        }

        if (statusFilterValue && statusFilterValue !== item.status) {
            return false;
        }

        if (searchFilterValue && !search(item)) {
            return false;
        }

        return true;
    });
}
