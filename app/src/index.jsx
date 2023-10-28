import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
    <React.Fragment>
        <div className="bg-purple-500">Hello world</div>
        <div className="flex flex-row space-x-4">
            <div className="basis-1/2 bg-purple-500 w-12">
                <p>This is another test div</p>
            </div>
            <div className="basis-1/2 bg-purple-500 w-12">
                <p>this is a test div</p>
            </div>

        </div>
    </React.Fragment>
);
