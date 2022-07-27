import React from "react";

export default function AddTransaction({setShowAddTransactions}) {
    return (
        <>
            <h1>Add Transactions Component</h1>
            <button onClick={()=>{setShowAddTransactions(false)}}>Back to main screen</button>
        </>
    
    );
}
