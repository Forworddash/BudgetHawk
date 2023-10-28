import React from "react";
import { createRoot } from "react-dom/client";
import Tabs from "./components/Tabs";

import "./index.css";

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
    // make some tabs and stuff
    // make a grid
    // make a list of tabs
    <div className="flex justify-center items-center">
        <Tabs>
            <div label='Gator'>
                See ya later, <em>Alligator</em>!
            </div>
            <div label='Croc'>
                After 'while, <em>Crocodile</em>!
            </div>
            <div label='Sarcosuchus'>
                Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
        
        <div className="flex flex-row space-x-4">
            
            <div className="w-1/2 bg-purple-500 p-4">
                <p>This is another test div</p>
            </div>
            <div className="w-1/2 bg-purple-500 p-4">
                <p>This is a test div</p>
            </div>
        </div>
        
    </div>
);
