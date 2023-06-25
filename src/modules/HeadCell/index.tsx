import React, { memo, useCallback } from "react";
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
