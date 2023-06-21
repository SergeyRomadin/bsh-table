import React, { useCallback } from "react";
import { ICollapsedTableProps, TKeyofMockData } from "../../utils/types";
import { HEAD_CELLS } from "../../utils/constants";
import TableHead from "@mui/material/TableHead";
import TableRowBase from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

export default function CollapsedTableHead(props: ICollapsedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: TKeyofMockData) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRowBase>
                {HEAD_CELLS.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell></TableCell>
            </TableRowBase>
        </TableHead>
    );
}
