import React from "react";

export default function TransactionTable({setShowAddTransactions}) {
     return (
        <>
            <h1>Transaction Table Component</h1>
            <button onClick={()=>{setShowAddTransactions(true)}}>Add new transaction</button>
        </>
    
    );
}