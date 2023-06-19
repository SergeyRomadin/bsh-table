import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Table } from "../styledComponents";
import TableBody from "@mui/material/TableBody";
import { TableCell } from "../styledComponents";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TableRow } from "../styledComponents";
import TableRowBase from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StatusCode from "../StatusCode";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "./CollapsibleTable.module.css";
import { Link } from "@mui/material";

function createData(
    time: string,
    url: string,
    user: string,
    payload: {} | [],
    response: {} | [],
    context: {} | [],
    method: string,
    status: number
) {
    console.log(JSON.stringify(response, null, 1));
    return {
        time,
        url,
        user,
        payload: JSON.stringify(payload, null, "\t"),
        response: JSON.stringify(response, null, "\t"),
        context: JSON.stringify(context, null, "\t"),
        method,
        status,
    };
}

const copyIconStyle = {
    height: "22px",
    width: "19px",
    color: "#3C3D46",
};

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const collapsedSize = "40px";

    const paddingBott = open ? "" : styles.pb0;

    function handlerCopy(text: string) {
        navigator.clipboard.writeText(text);
    }

    return (
        <React.Fragment>
            <TableRow>
                <TableCell sx={{ maxWidth: "120px" }} align="left">
                    <div className={styles.centerColumn}>{row.time}</div>
                </TableCell>
                <TableCell sx={{ maxWidth: "240px" }} align="left">
                    <div
                        className={styles.centerColumn + " " + styles.urlColumn}
                    >
                        {row.url}
                    </div>
                </TableCell>
                <TableCell align="right">
                    <div className={styles.cellContainer}>
                        <div className={styles.leftColumn}>
                            <Link
                                sx={{
                                    borderRadius: "50%",
                                    backgroundColor: "#40A7E3",
                                    width: "22px",
                                    height: "22px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                href="#"
                            >
                                <TelegramIcon
                                    fontSize="inherit"
                                    sx={{ color: "#fff" }}
                                />
                            </Link>
                        </div>
                        <div className={styles.rightColumn}>{row.user}</div>
                    </div>
                </TableCell>
                <TableCell align="left">
                    <div className={styles.cellContainer + " " + paddingBott}>
                        <div className={styles.leftColumn}>
                            <IconButton
                                onClick={() => {
                                    handlerCopy(row.payload);
                                }}
                                size="small"
                            >
                                <FileCopyOutlinedIcon sx={copyIconStyle} />
                            </IconButton>
                        </div>
                        <div className={styles.rightColumn}>
                            <Collapse
                                className={styles.tableCollapse}
                                sx={{ width: "100%" }}
                                collapsedSize={open ? collapsedSize : 50}
                                in={open}
                                timeout="auto"
                            >
                                {row.payload}
                            </Collapse>
                        </div>
                    </div>
                </TableCell>
                <TableCell align="left">
                    <div className={styles.cellContainer + " " + paddingBott}>
                        <div className={styles.leftColumn}>
                            <IconButton
                                onClick={() => {
                                    handlerCopy(row.response);
                                }}
                                size="small"
                            >
                                <FileCopyOutlinedIcon sx={copyIconStyle} />
                            </IconButton>
                        </div>
                        <div className={styles.rightColumn}>
                            <Collapse
                                className={styles.tableCollapse}
                                collapsedSize={open ? collapsedSize : 50}
                                in={open}
                                timeout="auto"
                            >
                                {row.response}
                            </Collapse>
                        </div>
                    </div>
                </TableCell>
                <TableCell align="left">
                    <div className={styles.cellContainer + " " + paddingBott}>
                        <div className={styles.leftColumn}>
                            <IconButton
                                onClick={() => {
                                    handlerCopy(row.context);
                                }}
                                size="small"
                            >
                                <FileCopyOutlinedIcon sx={copyIconStyle} />
                            </IconButton>
                        </div>
                        <div className={styles.rightColumn}>
                            <Collapse
                                className={styles.tableCollapse}
                                collapsedSize={open ? collapsedSize : 50}
                                in={open}
                                timeout="auto"
                            >
                                {row.context}
                            </Collapse>
                        </div>
                    </div>
                </TableCell>
                <TableCell align="left">
                    <div className={styles.centerColumn}>{row.method}</div>
                </TableCell>
                <TableCell align="right">
                    <div className={styles.centerColumn}>
                        <StatusCode statusCode={row.status} />
                    </div>
                </TableCell>
                <TableCell sx={{ verticalAlign: "middle", padding: 0 }}>
                    <Collapse
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? (
                                <KeyboardArrowUpIcon />
                            ) : (
                                <KeyboardArrowDownIcon />
                            )}
                        </IconButton>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData(
        "01.13.2023 11:35",
        "/location/{orderId}/main/businessInfo",
        "PSkliarenko",
        { orderId: "BS00000" },
        {
            id: "BS00000",
            number: "0411-01.15-0",
            contractNumber: "IRB/2-2/17",
            contractorOrderId: "00000",
            startDate: "2015-01-01",
            endDate: null,
            contractor: {
                id: "96a701ec-0c41-2be4-5532-5a796fa1cc2c",
                name: "Интернэшнл Ресторант Брэндс / ИРБ",
            },
            monitoringSystems: ["Zabbix IRB"],
            providers: ["Сенсорные системы", "MTS"],
            bandwidth: "10M",
        },
        {
            orderId: "BS00000",
            locationName: "KFC Тестовый Стенд 1 Москва",
            deviceName: "KFC-MSK-Zoo-Fortigate_BS00000",
        },
        "GET",
        200
    ),
    createData(
        "01.13.2023 11:35",
        "/location/{orderId}/main/businessInfo",
        "PSkliarenko",
        {
            address: "8.8.8.8",
            arpPing: true,
            count: 4294967295,
            doNotFragment: true,
            dscp: "123",
            interface: "165.90.2.19",
            interval: 5,
            routingTable: "lala",
            size: 65535,
            srcAddress: "8.8.8.8",
            ttl: 255,
        },
        {
            id: "BS00000",
            number: "0411-01.15-0",
            contractNumber: "IRB/2-2/17",
            contractorOrderId: "00000",
            startDate: "2015-01-01",
            endDate: null,
            contractor: {
                id: "96a701ec-0c41-2be4-5532-5a796fa1cc2c",
                name: "Интернэшнл Ресторант Брэндс / ИРБ",
            },
            monitoringSystems: ["Zabbix IRB"],
            providers: ["Сенсорные системы", "MTS"],
            bandwidth: "10M",
        },
        {
            orderId: "BS00000",
            locationName: "KFC Тестовый Стенд 1 Москва",
            deviceName: "KFC-MSK-Zoo-Fortigate_BS00000",
        },
        "GET",
        307
    ),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRowBase>
                        <TableCell>Time</TableCell>
                        <TableCell align="left">URL</TableCell>
                        <TableCell align="left">User</TableCell>
                        <TableCell align="left">Payload</TableCell>
                        <TableCell align="left">Response</TableCell>
                        <TableCell align="left">Context</TableCell>
                        <TableCell align="left">Method</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell />
                    </TableRowBase>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.time} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
