import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "../counter/counterAPI";
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
    actionsList: ROWS,
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

        setFilteredActionsList: (state) => {
            state.filteredActionsList = state.actionsList.filter((item) => {
                const {
                    urlFilterValue,
                    userFilterValue,
                    methodFilterValue,
                    searchFilterValue,
                    statusFilterValue,
                } = state;

                const search = (el: TMockData) => {
                    let key: TKeyofMockData;
                    for (key in el) {
                        if (
                            el[key]
                                .toString()
                                .toLowerCase()
                                .includes(
                                    searchFilterValue.toString().toLowerCase()
                                )
                        ) {
                            return true;
                        }
                    }
                };

                if (urlFilterValue && urlFilterValue !== item.url) {
                    return false;
                }

                if (userFilterValue && userFilterValue !== item.user) {
                    return false;
                }

                if (methodFilterValue && methodFilterValue !== item.method) {
                    return false;
                }

                if (statusFilterValue && statusFilterValue !== item.status) {
                    return false;
                }

                if (searchFilterValue && !search(item)) {
                    return false;
                }

                return true;
            });
        },
    },
});

export const {
    setMethodFilterValue,
    setSearchFilterValue,
    setStatusFilterValue,
    setUrlFilterValue,
    setUserFilterValue,
    setFilteredActionsList,
} = auditOfActionsSlice.actions;

export const selectAuditOfActions = (state: RootState) => state.auditOfActions;

export default auditOfActionsSlice.reducer;
