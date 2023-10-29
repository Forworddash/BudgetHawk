import React from "react";


const Dashboard = () => (
  <div className="flex flex-col">
    <div className="flex">
      <div className="basis-1/2">
        <h1 className="bg-purple-500">Here's your current Networth</h1>
        <div>
          <p>Assets</p>
          <p>Liabilities</p>
          <p>Networth</p>
        </div>
      </div>
      <div className="basis-1/2">
        <p>This is a short sentence about nothing in particular</p>
      </div>
    </div>
    <div className="flex">
      <div className="basis-1/2 bg-purple-500">
        <p>
          This is a short sentence about nothing in particular This is a short sentence about nothing in particular This is a short sentence about nothing in particular
        </p>
      </div>
      <div className="basis-1/2 bg-">
        <p>This is a short sentence about nothing in particular</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
