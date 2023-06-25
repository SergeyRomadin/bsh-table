import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./index.css";
import "@fontsource/inter";
import CollapsibleTable from "./modules/CollapsibleTable";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CollapsibleTable></CollapsibleTable>
        </Provider>
    </React.StrictMode>
);
