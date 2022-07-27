import './App.css';
import TransactionTable from './components/TransactionTable';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import AddCategory from './components/AddCategory';
import { useState } from 'react';

function App() {

  const [showAddCategory, setShowAddCategory] = useState(true);


  return (
    <div className="App">
      <Header />
      <TransactionTable />
      <Chart />
      <AddCategory />
      <AddTransaction />
    </div>
  );
}

export default App;
