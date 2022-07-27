import './App.css';
import TransactionTable from './components/TransactionTable';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import AddCategory from './components/AddCategory';
import { useState } from 'react';

function App() {

  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransactions, setShowAddTransactions] = useState(false);

  if (showAddCategory) {
    return <AddCategory setShowAddCategory={setShowAddCategory} />
  } 

  if (showAddTransactions) {
    return <AddTransaction setShowAddTransactions={setShowAddTransactions}/>
  }

  return (
    <>
      <Header setShowAddCategory={setShowAddCategory}/>
      <TransactionTable setShowAddTransactions={setShowAddTransactions}/>
      <Chart />
    </>
  );
}

export default App;
