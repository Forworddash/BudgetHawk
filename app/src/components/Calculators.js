import React, { useState } from "react";

const Calculators = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("");
  const [futureValue, setFutureValue] = useState("");

  const calculateCompoundInterest = () => {
    const P = parseFloat(initialInvestment);
    const PMT = parseFloat(monthlyContribution);
    const r = parseFloat(interestRate) / 100; // Divide by 100 to convert percentage to decimal.
    const n = parseFloat(compoundingFrequency);
    const t = parseFloat(years);
    
    const futureValue = P * Math.pow(1 + r / n, n * t) + PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Compound Interest Calculator</h1>

        <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Initial Investment</label>
          <input
            type="text"
            placeholder="10000"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Monthly Contribution</label>
          <input
            type="text"
            placeholder="500"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Interest Rate</label>
          <input
            type="text"
            placeholder="8"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Years</label>
          <input
            type="text"
            placeholder="40"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Compounding Frequency</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
          <div className="text-center">
            <button
              onClick={calculateCompoundInterest}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Calculate
            </button>
          </div>
          <div>
            <label className="block text-sm font-semibold">Future Value</label>
            <input
              type="text"
              value={futureValue}
              readOnly
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
