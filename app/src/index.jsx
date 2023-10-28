import React from "react";
import { createRoot } from "react-dom/client";
import Tabs from "./components/Tabs";
import Calculators from "./components/Calculators";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Budgets from "./components/Budgets";
import "./index.css";

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
    // make some tabs and stuff
    // make a grid
    // make a list of tabs
    // <div className="flex justify-center items-center">
    <div className="">
        <Tabs>
            <div label='Dashboard'>
                <Dashboard></Dashboard>
            </div>
            
            <div label='Calculators'>
                <Calculators></Calculators>
            </div>
            <div label='Budgets'>
                <Budgets></Budgets>
            </div>
            <div label='Settings'>
                <Settings></Settings>
            </div>
            
        </Tabs>
        
        {/* <div className="flex flex-row space-x-4">
            
            <div className="w-1/2 bg-purple-500 p-4">
                <p>This is another test div</p>
            </div>
            <div className="w-1/2 bg-purple-500 p-4">
                <p>This is a test div</p>
            </div>
        </div> */}
        
    </div>
);
