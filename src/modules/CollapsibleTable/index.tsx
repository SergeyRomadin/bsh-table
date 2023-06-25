import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Table } from "../../styledComponents";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { sortedRows, filteredActionsList } from "../../utils/utils";
import { TOrder, TKeyOfActionInfo, TActionInfo } from "../../utils/types";
import CollapsedTableHead from "../CollapsedTableHead";
import Row from "../CollapsedTableRow";
import CollapsedToolbar from "../CollapsedToolbar";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    selectAuditOfActions,
    setActionsList,
} from "../../Redux/auditOfActionsSlice";
import { useSelector } from "react-redux";
import { actionsApi } from "../../Redux/services/actionsApi";

export default function CollapsibleTable() {
    const [order, setOrder] = useState<TOrder>("asc");
    const [orderBy, setOrderBy] = useState<TKeyOfActionInfo>("time");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleRequestSort = useCallback(
        (property: TKeyOfActionInfo) => {
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

    const filteredRows: Array<TActionInfo> | null = useMemo(() => {
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

    const visibleRows: Array<TActionInfo> | null = React.useMemo(() => {
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
            <CollapsedToolbar />
            <Table aria-label="collapsible table">
                <CollapsedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {visibleRows &&
                        visibleRows.map((row, index) => {
                            return <Row key={index} row={row} />;
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
