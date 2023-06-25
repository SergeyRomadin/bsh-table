import React from "react";
import TableBase from "@mui/material/Table";

import { styled } from "@mui/material/styles";

export const Table = styled(TableBase)<any>(() => ({
    borderSpacing: "0 8px",
    borderCollapse: "separate",
    padding: "24px",
    fontFamily: "Inter",
    boxSizing: "border-box",
}));
