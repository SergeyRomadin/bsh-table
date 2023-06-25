import React, { useState } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "../../styledComponents";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";

import Search from "../Search";
import RefreshIconBtn from "../RefreshIconBtn";
import FilterList from "../FilterList";
import { actionsApi } from "../../features/Redux/services/actionsApi";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setActionsList } from "../../features/Redux/auditOfActionsSlice";

interface EnhancedTableToolbarProps {
    numSelected: number;
}

const styleSX = {
    fontSize: "22px",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0em",
    textAlign: "left",
};

export default function CollapsedToolbar(props: EnhancedTableToolbarProps) {
    const [openFilterList, setOpenFilterList] = useState(false);
    const dispatch = useAppDispatch();
    const { data, refetch } = actionsApi.useFetchActionsListQuery("");
    function handleRefresh() {
        refetch();
        dispatch(setActionsList(data));
    }

    return (
        <Box
            sx={{
                width: "100%",
                pt: "24px",
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: "100%",
                }}
            >
                <RefreshIconBtn handleRefresh={handleRefresh} />
                <Typography
                    sx={{
                        flex: "1 1 100%",
                        paddingLeft: "12px",
                        ...styleSX,
                    }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Audit of actions
                </Typography>
                <Search />
                <IconButton
                    sx={{
                        backgroundColor: "#3858B6",
                        ml: "24px",
                        "&:hover": {
                            backgroundColor: "#3858B6",
                            opacity: 0.8,
                        },
                    }}
                    onClick={() => setOpenFilterList(!openFilterList)}
                >
                    <FilterListIcon sx={{ color: "#fff" }} />
                </IconButton>
            </Toolbar>
            {openFilterList ? (
                <Toolbar>
                    <FilterList />
                </Toolbar>
            ) : null}
        </Box>
    );
}
