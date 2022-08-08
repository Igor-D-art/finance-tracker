import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTransaction({
    categories,
    setTransactions,
    setShowAddTransactions,
}) {

    const [amount, setAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
            if (!amount) {
            alert("Enter amount");
            return;
        }

        const finance = {
            amount: amount,
            date: selectedDate, 
            category: categories[selectedCategory]
        }
        
        setTransactions((currentState) => {
            return [...currentState, finance]
        })

        setShowAddTransactions(false);
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h1>Enter a new transactioin</h1>
                        <p>Enter the date, amount and transaction category</p>
                        <form onSubmit={handleSubmit} className='form-inline'>
                            <div className="from-group mb-2">
                                <DatePicker
                                    className="form-control"
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select
                                    className="form-control"
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value)}}
                                >
                                    {categories.map((category, index) => {
                                        return (
                                            <option key={index} value={index}>
                                            {category.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="form-group mr-3 mb-2">
                                <input
                                    className="form-control"
                                    value={amount}
                                    placeholder="Set amount"
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2"
                            >Add transaction</button>
                        </form>
                    </div>
                </div>
            </div>
            
            

        </>
    
    );
}
