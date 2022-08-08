import React from "react";
import format from "date-fns/format";

export default function TransactionTable({
    transactions,
    setShowAddTransactions, 
    removeTransaction,
}) {
     return (
        <>
            <table className="table table-striped border">
                <thead className="bg-primary">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="p-4 bg-blue-200 text-center">
                        <td colSpan="4">
                            <button
                                className="btn btn-success"
                                onClick={() => setShowAddTransactions(true)}
                                >Add new transaction
                            </button>
                        </td>
                    </tr>
                    {transactions.map((transaction, index) => {
                        return (
                            <tr className="p-4" key={index}>
                                <td>{format(transaction.date, 'yyyy-MM-dd')}</td>
                                <td>${transaction.amount}</td>
                                <td>{transaction.category.name}</td>
                                <td>
                                    <button onClick={()=>(removeTransaction(index))} className="btn btn-danger">X</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}