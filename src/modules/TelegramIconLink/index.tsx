import React from "react";
import { TelegramIcon } from "../../icons/TelegramIcon";
import { Link } from "@mui/material";

export default function TelegramIconLink() {
    return (
        <Link
            sx={{
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                display: "block",
            }}
            href="#"
        >
            <TelegramIcon />
        </Link>
    );
}
