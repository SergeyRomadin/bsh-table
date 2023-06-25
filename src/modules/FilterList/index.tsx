import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ROWS } from "../../utils/constants";
import { TMockData } from "../../utils/types";
import DateRangePickerValue from "../DataRangePicker";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    setMethodFilterValue,
    setStatusFilterValue,
    setUrlFilterValue,
    setUserFilterValue,
} from "../../features/Redux/auditOfActionsSlice";

const styleSX = {
    formControl: { maxWidth: "348px", pb: "12px" },
};

export default function FilterList() {
    const [url, setUrl] = useState("");
    const [user, setUser] = useState("");
    const [method, setMethod] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useAppDispatch();
    const handleChange = (event: SelectChangeEvent, setState: any) => {
        setState(event.target.value as string);
    };

    const urlOptions: string[] = Array.from(
        new Set(
            ROWS.map((row: TMockData) => {
                return row.url;
            })
        )
    );
    const userOptions: string[] = Array.from(
        new Set(
            ROWS.map((row: TMockData) => {
                return row.user;
            })
        )
    );
    const methodOptions: string[] = Array.from(
        new Set(
            ROWS.map((row: TMockData) => {
                return row.method;
            })
        )
    );
    const statusOptions: string[] = Array.from(
        new Set(
            ROWS.map((row: TMockData) => {
                return row.status;
            })
        )
    );

    function renderOptions(arr: string[]) {
        let key = 0;
        return arr.map((option: string) => {
            key++;
            return (
                <MenuItem key={key} value={option}>
                    {option}
                </MenuItem>
            );
        });
    }

    return (
        <Box
            sx={{
                width: "100%",
                minWidth: 120,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    minWidth: 120,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    // display: "flex",
                    // justifyContent: "space-between",
                    // flexWrap: "wrap",
                }}
            >
                <FormControl fullWidth sx={styleSX.formControl}>
                    <InputLabel id="fiter-select-url">URL</InputLabel>
                    <Select
                        labelId="fiter-select-url"
                        id="fiter-select-url"
                        value={url}
                        label="URL"
                        onChange={(e) => {
                            handleChange(e, setUrl);
                            dispatch(setUrlFilterValue(e.target.value));
                        }}
                    >
                        <MenuItem value={""}>All</MenuItem>
                        {renderOptions(urlOptions)}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={styleSX.formControl}>
                    <InputLabel id="fiter-select-user">User</InputLabel>
                    <Select
                        labelId="fiter-select-user"
                        id="fiter-select-user"
                        value={user}
                        label="User"
                        onChange={(e) => {
                            handleChange(e, setUser);
                            dispatch(setUserFilterValue(e.target.value));
                        }}
                    >
                        <MenuItem value={""}>All</MenuItem>
                        {renderOptions(userOptions)}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={styleSX.formControl}>
                    <InputLabel id="fiter-select-method">Method</InputLabel>
                    <Select
                        labelId="fiter-select-method"
                        id="fiter-select-method"
                        value={method}
                        label="Method"
                        onChange={(e) => {
                            handleChange(e, setMethod);
                            dispatch(setMethodFilterValue(e.target.value));
                        }}
                    >
                        <MenuItem value={""}>All</MenuItem>
                        {renderOptions(methodOptions)}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={styleSX.formControl}>
                    <InputLabel id="fiter-select-status">Status</InputLabel>
                    <Select
                        labelId="fiter-select-status"
                        id="fiter-select-status"
                        value={status}
                        label="Status"
                        onChange={(e) => {
                            handleChange(e, setStatus);
                            dispatch(setStatusFilterValue(e.target.value));
                        }}
                    >
                        <MenuItem value={""}>All</MenuItem>
                        {renderOptions(statusOptions)}
                    </Select>
                </FormControl>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    minWidth: 120,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                }}
            >
                <DateRangePickerValue />
            </Box>
        </Box>
    );
}
