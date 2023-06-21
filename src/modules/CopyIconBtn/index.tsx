import React from "react";
import { IconButton } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

const copyIconStyle = {
    height: "22px",
    width: "19px",
    color: "#3C3D46",
};

export default function CopyIconBtn(props: any) {
    const { handlerCopy } = props;
    return (
        <IconButton onClick={handlerCopy}>
            <FileCopyOutlinedIcon sx={copyIconStyle} />
        </IconButton>
    );
}
