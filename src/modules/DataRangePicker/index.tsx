import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";

const styleSX = {
    formControl: { width: "100%", maxWidth: "348px", pb: "12px" },
};

export default function DateRangePickerValue() {
    const [startDate, setStartDate] = React.useState<Dayjs | null>();
    const [endDate, setEndDate] = React.useState<Dayjs | null>();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={styleSX.formControl}
                label="Start date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
            />
            <DatePicker
                sx={{ ...styleSX.formControl }}
                label="End date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
            />
        </LocalizationProvider>
    );
}

// const flFn = (items, filters) => {
//     return items.filter((item) => {
//         if (filters.URL && filters.URL !== item.URL) {
//             return false;
//         }

//         if (filters.name && filters.name !== item.name) {
//             return false;
//         }

//         if (filters.name && filters.name !== item.name) {
//             return false;
//         }

//         if (filters.search && qwe) {
//             retuern fasle
//         }

//         return true;
//     });
// };
// const qwe = () =>  Object.values(item).some((vlaue) => {
//     retrun vlaue.toLoverCase().includes(filters.search.toLoverCase());
//  })
