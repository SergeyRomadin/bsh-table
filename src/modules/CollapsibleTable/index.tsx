import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Table } from "../../styledComponents";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { sortedRows, filteredActionsList } from "../../utils/utils";
import { TOrder, TKeyofMockData, TMockData } from "../../utils/types";
import { ROWS } from "../../utils/constants";
import CollapsedTableHead from "../CollapsedTableHead";
import Row from "../CollapsedTableRow";
import CollapsedToolbar from "../CollapsedToolbar";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    selectAuditOfActions,
    setActionsList,
} from "../../features/Redux/auditOfActionsSlice";
import { useSelector } from "react-redux";
import { actionsApi } from "../../features/Redux/services/actionsApi";

export default function CollapsibleTable() {
    const [order, setOrder] = useState<TOrder>("asc");
    const [orderBy, setOrderBy] = useState<TKeyofMockData>("time");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleRequestSort = useCallback(
        (property: TKeyofMockData) => {
            const isAsc = orderBy === property && order === "asc";
            setOrder(isAsc ? "desc" : "asc");
            setOrderBy(property);
        },
        [orderBy, order]
    );
    const { data } = actionsApi.useFetchActionsListQuery("");
    const dispatch = useAppDispatch();
    const auditOfActionsState = useSelector(selectAuditOfActions);
    const {
        urlFilterValue,
        userFilterValue,
        methodFilterValue,
        searchFilterValue,
        statusFilterValue,
        startDateFilterValue,
        endDateFilterValue,
        actionsList,
    } = auditOfActionsState;

    useEffect(() => {
        dispatch(setActionsList(data));
    }, [data]);

    const filteredRows: Array<TMockData> | null = useMemo(() => {
        if (!filteredActionsList || filteredActionsList.length === 0) {
            return null;
        }
        return filteredActionsList(auditOfActionsState);
    }, [
        urlFilterValue,
        userFilterValue,
        methodFilterValue,
        searchFilterValue,
        statusFilterValue,
        startDateFilterValue,
        endDateFilterValue,
        actionsList,
    ]);

    const visibleRows: Array<TMockData> | null = React.useMemo(() => {
        if (!filteredRows || filteredRows.length === 0) {
            return null;
        }
        return sortedRows(filteredRows, order, orderBy, page, rowsPerPage);
    }, [filteredRows, order, orderBy, page, rowsPerPage]);

    return (
        <TableContainer
            sx={{ width: "100vw", position: "relative" }}
            component={Paper}
        >
            <CollapsedToolbar numSelected={0} />
            <Table aria-label="collapsible table">
                <CollapsedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {!visibleRows
                        ? null
                        : visibleRows.map((row, index) => {
                              return <Row key={index} row={row} />;
                          })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
