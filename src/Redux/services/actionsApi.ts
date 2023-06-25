import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TActionInfo } from "../../utils/types";

export const actionsApi = createApi({
    reducerPath: "actionsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        fetchActionsList: build.query<TActionInfo[], string>({
            query: () => ({
                url: `/actions`,
            }),
        }),
    }),
});
