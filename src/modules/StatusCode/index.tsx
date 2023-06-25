import React from "react";
import { Box } from "@mui/material";

export default function StatusCode(props: { statusCode: number }) {
    const { statusCode } = props;

    const styleSX = {
        container: {
            maxWidth: "min-content",
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: "8px",
        },
        success: {
            backgroundColor: "#b8d3cc",
        },
        error: {
            backgroundColor: "#ffdad6",
        },
    };

    return (
        <Box
            sx={
                statusCode < 200 || statusCode > 299
                    ? { ...styleSX.error, ...styleSX.container }
                    : { ...styleSX.success, ...styleSX.container }
            }
        >
            {statusCode}
        </Box>
    );
}
