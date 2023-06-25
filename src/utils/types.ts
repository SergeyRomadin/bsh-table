import { IAuditOfActionsState } from "../Redux/auditOfActionsSlice";
import { createData } from "../mock/utils";

export type TOrder = "asc" | "desc";

export type TActionInfo = ReturnType<typeof createData>;

export type TKeyOfActionInfo = keyof TActionInfo;

export interface ISortParams {
    order: TOrder;
    orderBy: TKeyOfActionInfo;
}

export interface IHeadCell {
    disablePadding: boolean;
    id: TKeyOfActionInfo;
    label: string;
    numeric: boolean;
}

export interface ICollapsedTableProps {
    onRequestSort: (property: TKeyOfActionInfo) => void;
    order: TOrder;
    orderBy: string;
}

export interface IPayload {
    name: keyof IAuditOfActionsState;
    value: any;
}
