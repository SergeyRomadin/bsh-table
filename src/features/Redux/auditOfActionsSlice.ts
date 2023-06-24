import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { TKeyofMockData, TMockData } from "../../utils/types";
import { ROWS } from "../../utils/constants";

export interface IAuditOfActionsState {
    actionsList: TMockData[];
    searchFilterValue: string;
    urlFilterValue: string;
    userFilterValue: string;
    methodFilterValue: string;
    statusFilterValue: number;
    filteredActionsList: TMockData[];
}

const initialState: IAuditOfActionsState = {
    actionsList: [],
    searchFilterValue: "",
    urlFilterValue: "",
    userFilterValue: "",
    methodFilterValue: "",
    statusFilterValue: 0,
    filteredActionsList: [],
};

export const auditOfActionsSlice = createSlice({
    name: "auditOfActions",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setActionsList: (state, action) => {
            state.actionsList = action.payload;
        },

        setSearchFilterValue: (state, action) => {
            state.searchFilterValue = action.payload;
        },

        setUrlFilterValue: (state, action) => {
            state.urlFilterValue = action.payload;
        },

        setUserFilterValue: (state, action) => {
            state.userFilterValue = action.payload;
        },

        setMethodFilterValue: (state, action) => {
            state.methodFilterValue = action.payload;
        },

        setStatusFilterValue: (state, action) => {
            state.statusFilterValue = action.payload;
        },
    },
});

export const {
    setMethodFilterValue,
    setSearchFilterValue,
    setStatusFilterValue,
    setUrlFilterValue,
    setUserFilterValue,
    setActionsList,
} = auditOfActionsSlice.actions;

export const selectAuditOfActions = (state: RootState) => state.auditOfActions;

export default auditOfActionsSlice.reducer;
