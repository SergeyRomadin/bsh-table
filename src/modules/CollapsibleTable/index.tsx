import React, { useState } from "react";
import { Table } from "../../styledComponents";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { stableSort, getComparator } from "../../utils/utils";
import { TOrder, TKeyofMockData } from "../../utils/types";
import { ROWS } from "../../utils/constants";
import CollapsedTableHead from "../CollapsedTableHead";
import Row from "../CollapsedTableRow";

export default function CollapsibleTable() {
    const [order, setOrder] = useState<TOrder>("asc");
    const [orderBy, setOrderBy] = useState<TKeyofMockData>("time");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: TKeyofMockData
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort(ROWS, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <CollapsedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {visibleRows.map((row, index) => {
                        return <Row key={index} row={row} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
