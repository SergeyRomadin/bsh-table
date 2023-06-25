import React, { memo, useCallback, useEffect } from "react";
import { ICollapsedTableProps, TKeyOfActionInfo } from "../../utils/types";
import { HEAD_CELLS } from "../../utils/constants";
import TableHead from "@mui/material/TableHead";
import TableRowBase from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

function HeadCell(props: any) {
    const { id, label, order, orderBy, onRequestSort } = props;
    const createSortHandler = useCallback(() => {
        onRequestSort(id);
    }, [id, onRequestSort]);

    return (
        <TableCell
            align="left"
            sortDirection={orderBy === id ? order : false}
            sx={{ border: "none", padding: "0 16px 0" }}
        >
            <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : "asc"}
                onClick={createSortHandler}
            >
                {label}
                {orderBy === id ? (
                    <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                    </Box>
                ) : null}
            </TableSortLabel>
        </TableCell>
    );
}

export default memo(HeadCell);
