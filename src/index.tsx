import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import "@fontsource/inter";
import EnhancedTable from "./EnhancedTable";
import CollapsibleTable from "./CollapsibleTable";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <EnhancedTable></EnhancedTable> */}
            <CollapsibleTable></CollapsibleTable>
            {/* <App /> */}
        </Provider>
    </React.StrictMode>
);
