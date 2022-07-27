import React from "react";

export default function Header({setShowAddCategory}) {
    return (
        <>
            <h1>Header Component</h1>
            <button onClick={()=>{setShowAddCategory(true)}}>Add new category</button>
        </>
    
    );
}