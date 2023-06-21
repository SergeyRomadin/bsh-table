import { IHeadCell, TMockData } from "./types";
import { createData } from "../mock/utils";

export const ROWS: any = [
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
