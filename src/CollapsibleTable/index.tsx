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

function createData(
    time: string,
    url: string,
    user: string,
    payload: string,
    response: {} | [],
    context: {} | [],
    method: string,
    status: number
) {
    console.log(JSON.stringify(response));
    return {
        time,
        url,
        user,
        payload,
        response: JSON.stringify(response),
        context: JSON.stringify(context),
        method,
        status,
    };
}

// td:first-child {
//     border-top-left-radius: 10px;
//     border-bottom-left-radius: 10px;
// }
// td:last-child {
//     border-bottom-right-radius: 10px;
//     border-top-right-radius: 10px;
// }

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const collapsedSize = "50px";

    return (
        <React.Fragment>
            <TableRow
            // sx={{ "& > *": { borderBottom: "unset" } }}
            >
                <TableCell sx={{}} align="left">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.time}
                    </Collapse>
                </TableCell>
                <TableCell sx={{}} align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.url}
                    </Collapse>
                </TableCell>
                <TableCell align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.user}
                    </Collapse>
                </TableCell>
                <TableCell align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.payload}
                    </Collapse>
                </TableCell>
                <TableCell align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.response}
                    </Collapse>
                </TableCell>
                <TableCell align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.context}
                    </Collapse>
                </TableCell>
                <TableCell align="left">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        {row.method}
                    </Collapse>
                </TableCell>
                <TableCell align="right">
                    <Collapse
                        collapsedSize={collapsedSize}
                        in={open}
                        timeout="auto"
                    >
                        <StatusCode statusCode={row.status} />
                    </Collapse>
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
        "orderId: BS00000",
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
        "orderId: BS00000",
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
                        <TableCell align="right">URL</TableCell>
                        <TableCell align="right">User</TableCell>
                        <TableCell align="right">Payload</TableCell>
                        <TableCell align="right">Response</TableCell>
                        <TableCell align="right">Context</TableCell>
                        <TableCell align="right">Method</TableCell>
                        <TableCell align="right">Status</TableCell>
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
