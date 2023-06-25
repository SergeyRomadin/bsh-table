import { IHeadCell, TActionInfo } from "./types";
import { createData } from "../mock/utils";

export const HEAD_CELLS: readonly IHeadCell[] = [
    {
        id: "time",
        numeric: true,
        disablePadding: false,
        label: "Time",
    },
    {
        id: "url",
        numeric: false,
        disablePadding: false,
        label: "URL",
    },
    {
        id: "user",
        numeric: false,
        disablePadding: false,
        label: "User",
    },
    {
        id: "payload",
        numeric: false,
        disablePadding: false,
        label: "Payload",
    },
    {
        id: "response",
        numeric: false,
        disablePadding: false,
        label: "Response",
    },
    {
        id: "context",
        numeric: false,
        disablePadding: false,
        label: "Context",
    },
    {
        id: "method",
        numeric: false,
        disablePadding: false,
        label: "Method",
    },
    {
        id: "status",
        numeric: true,
        disablePadding: false,
        label: "Status",
    },
];
