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
import { TelegramIcon } from "../icons/TelegramIcon";
import styles from "./CollapsibleTable.module.css";
import { Link } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof ReturnType<typeof createData>;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
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

const copyIconStyle = {
    height: "22px",
    width: "19px",
    color: "#3C3D46",
};

interface CollapsedTableProps {
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof ReturnType<typeof createData>
    ) => void;
    order: Order;
    orderBy: string;
}

function CollapsedTableHead(props: CollapsedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof ReturnType<typeof createData>) =>
        (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRowBase>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell></TableCell>
            </TableRowBase>
        </TableHead>
    );
}

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
                                    width: "22px",
                                    height: "22px",
                                    display: "block",
                                }}
                                href="#"
                            >
                                <TelegramIcon />
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
        "01.13.2023 11:25",
        "/location/{orderId}/main/businessInfo",
        "Valeron",
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
            id: "BS000123",
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
            orderId: "BS000123",
            locationName: "KFC Тестовый Стенд 1 Москва",
            deviceName: "KFC-MSK-Zoo-Fortigate_BS00000",
        },
        "POST",
        307
    ),
    createData(
        "01.13.2023 12:25",
        "/location/{orderId}/main/business",
        "Sergio",
        {
            address: "8.8.8.9",
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
            id: "BS000126",
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
            orderId: "BS000125",
            locationName: "KFC Тестовый Стенд 1 Москва",
            deviceName: "KFC-MSK-Zoo-Fortigate_BS00000",
        },
        "POST",
        404
    ),
];

export default function CollapsibleTable() {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] =
        React.useState<keyof ReturnType<typeof createData>>("time");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof ReturnType<typeof createData>
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <CollapsedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {visibleRows.map((row, index) => {
                        return <Row key={index} row={row} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
