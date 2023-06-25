import React from "react";
import { TelegramIcon } from "../../icons/TelegramIcon";
import { Link } from "@mui/material";

const styleSX = {
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "block",
};

export default function TelegramIconLink() {
    return (
        <Link sx={styleSX} href="#">
            <TelegramIcon />
        </Link>
    );
}
