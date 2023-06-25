import React from "react";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const styleSX = {
    height: "16px",
    width: "16px",
    color: "#3C3D46",
};

export default function RefreshIconBtn(props: any) {
    const { handleRefresh } = props;
    return (
        <IconButton sx={{ padding: "4px" }} onClick={handleRefresh}>
            <RefreshIcon sx={styleSX} />
        </IconButton>
    );
}
