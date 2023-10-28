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
    // <div className="flex justify-center items-center">
    <div className="">
        <Tabs>
            <div label='Dashboard'>
                <div>
                    <div className="text-center bg-gray-200">
                        <p>Test</p>    
                    </div>    
                </div>
            </div>
            <div label='Calculators'>
                <div>
                    <div className="text-center bg-gray-200">
                        <p>Test</p>    
                    </div>    
                </div>
            </div>
            <div label='Settings'>
                <div className="">
                    <div className="text-center bg-gray-200">
                        <p>Settings</p>    
                    </div>    
                </div>
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
