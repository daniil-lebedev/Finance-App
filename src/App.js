import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  const [darkMode, setDarkmode] = React.useState(false)
  return (
    <GlobalProvider>
      <Header />
      <div className={darkMode ? "dark-mode":"body"}>
        <nav>
          <div className="toggle-container">
            <span className="toggle">
              <input
              checked={darkMode}
              onChange={() => setDarkmode(prevMode => !prevMode)}
              type="checkbox"
              className="checkbox" 
              id="checkbox"
              />
              <label htmlFor="checkbox" />
            </span>
          </div>
        </nav>
        <main>{darkMode ? "Dark Mode":"Light Mode"}</main>
        <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
