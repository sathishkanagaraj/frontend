import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import { App } from './App';
import './index.css'
import { Routes } from './Routes';

const root = createRoot(
    document.getElementById("root") as HTMLElement
)

root.render(
<StrictMode>
    <Routes />
</StrictMode>
)