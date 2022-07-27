import React from "react";

export default function AddCategory({setShowAddCategory}) {
    return (
        <>
            <h1>Add Category Component</h1>
            <button onClick={()=>{setShowAddCategory(false)}}>Back to main screen</button>
        </>
    
    );

}