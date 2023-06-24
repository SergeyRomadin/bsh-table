import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TMockData } from "../../../utils/types";

export const actionsApi = createApi({
    reducerPath: "actionsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        fetchActionsList: build.query<TMockData[], string>({
            query: () => ({
                url: `/actions`,
            }),
        }),
    }),
});
