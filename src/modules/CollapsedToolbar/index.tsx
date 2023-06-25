import React, { useState } from "react";
import {
    ToolbarContainer,
    Toolbar,
    Typography,
    IconButton,
} from "./styledComponents";
import FilterListIcon from "@mui/icons-material/FilterList";

import Search from "../Search";
import RefreshIconBtn from "../RefreshIconBtn";
import FilterList from "../FilterList";
import { actionsApi } from "../../Redux/services/actionsApi";
import { useAppDispatch } from "../../app/hooks";
import { setActionsList } from "../../Redux/auditOfActionsSlice";

export default function CollapsedToolbar() {
    const [openFilterList, setOpenFilterList] = useState(false);
    const dispatch = useAppDispatch();
    const { data, refetch } = actionsApi.useFetchActionsListQuery("");
    function handleRefresh() {
        refetch();
        dispatch(setActionsList(data));
    }

    return (
        <ToolbarContainer>
            <Toolbar>
                <RefreshIconBtn handleRefresh={handleRefresh} />
                <Typography variant="h6" id="tableTitle" component="div">
                    Audit of actions
                </Typography>
                <Search />
                <IconButton onClick={() => setOpenFilterList(!openFilterList)}>
                    <FilterListIcon />
                </IconButton>
            </Toolbar>
            {openFilterList && (
                <Toolbar>
                    <FilterList />
                </Toolbar>
            )}
        </ToolbarContainer>
    );
}
