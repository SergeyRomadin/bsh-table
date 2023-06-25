import * as React from "react";
import TableRowBase from "@mui/material/TableRow";
import TableBase from "@mui/material/Table";
import TableCellBase from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

export const Table = styled(TableBase)<any>(() => ({
    borderSpacing: "0 8px",
    borderCollapse: "separate",
    padding: "24px",
    fontFamily: "Inter",
    boxSizing: "border-box",
}));

export const TableRow = styled(TableRowBase)<any>(() => ({
    borderRadius: "20px",
    backgroundColor: "#eeeef9",
    fontFamily: "Inter",

    "& td": {},
    "& td:first-of-type": {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
    },
    "& td:last-of-type": {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "#E2E4F4",
    },
}));

export const TableCell = styled(TableCellBase)<any>(() => ({
    fontFamily: "Inter",
    border: "none",
    padding: "0 16px",
    verticalAlign: "top",
    boxSizing: "border-box",
}));
