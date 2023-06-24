import React, { useCallback } from "react";
import { ICollapsedTableProps, TKeyofMockData } from "../../utils/types";
import { HEAD_CELLS } from "../../utils/constants";
import TableHead from "@mui/material/TableHead";
import TableRowBase from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import HeadCell from "../HeadCell";

export default function CollapsedTableHead(props: ICollapsedTableProps) {
    const { order, orderBy, onRequestSort } = props;

    return (
        <TableHead>
            <TableRowBase>
                {HEAD_CELLS.map((headCell) => (
                    <HeadCell
                        key={headCell.label}
                        id={headCell.id}
                        label={headCell.label}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={onRequestSort}
                    />
                ))}
                <TableCell sx={{ border: 0 }}></TableCell>
            </TableRowBase>
        </TableHead>
    );
}
