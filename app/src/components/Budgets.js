import React, { useState } from "react";

const Budgets = () => {
  const [expenses, setExpenses] = useState([
    { description: "Rent", amount: 1800 },
    { description: "Utilities", amount: 78 },
    // Add more expense items as needed
  ]);

  const [budgets, setBudgets] = useState([
    { category: "Groceries", amount: 300 },
    { category: "Entertainment", amount: 100 },
    // Add more budget items as needed
  ]);

  const addExpense = (description, amount) => {
    const newExpense = { description, amount };
    setExpenses([...expenses, newExpense]);
  };

  const addBudget = (category, amount) => {
    const newBudget = { category, amount };
    setBudgets([...budgets, newBudget]);
  };

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>

      <button onClick={() => addExpense("New Expense", 0)}>Add Expense</button>

      <h1>Budgets</h1>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            {budget.category}: ${budget.amount}
          </li>
        ))}
      </ul>

      <button onClick={() => addBudget("New Budget Category", 0)}>Add Budget</button>
    </div>
  );
};

export default Budgets;
