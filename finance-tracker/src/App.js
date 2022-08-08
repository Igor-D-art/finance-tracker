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

  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [activeCategory, setActiveCategory] = useState("");

  if (showAddCategory) {
    return <AddCategory
      setShowAddCategory={setShowAddCategory}
      setCategories={setCategories} />
  } 

  if (showAddTransactions) {
    return <AddTransaction
      categories={categories}
      setTransactions={setTransactions}
      setShowAddTransactions={setShowAddTransactions} />
  }

  const removeTransaction = (index) => {
    const newTransactions = transactions.filter((transaction, idx) => {
      return idx !== index;
    })
    setTransactions(newTransactions);
  }

  const filterTransactions = () => {
    return transactions
    .filter((transaction) =>
    activeCategory ? transaction.category.name === activeCategory : true
    ).sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  };

  return (
    <>
      <Header
        activeCategory = {activeCategory}
        setActiveCategory = {setActiveCategory}
        setShowAddCategory={setShowAddCategory}
        categories = {categories}
      />
      <TransactionTable
        setShowAddTransactions={setShowAddTransactions}
        // transactions={transactions}
        transactions={filterTransactions(transactions)}
        removeTransaction={removeTransaction} />
      <Chart
        // transactions={transactions}/>
        transactions={filterTransactions(transactions)}/>
    </>
  );
}

export default App;
