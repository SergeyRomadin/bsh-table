import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import auditOfActionsReducer from "./auditOfActionsSlice";
import { actionsApi } from "./services/actionsApi";

export const store = configureStore({
    reducer: {
        auditOfActions: auditOfActionsReducer,
        [actionsApi.reducerPath]: actionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(actionsApi.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
