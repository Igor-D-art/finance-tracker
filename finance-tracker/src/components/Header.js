import React from "react";

export default function Header({setShowAddCategory, categories, activeCategory, setActiveCategory}) {
    return (
        <>
            <ul className="navbar navbar-expand flex-row w-100 list-unstyled">
                <li
                    className={`font-weight-bold p-3 nav-item ${
                    !activeCategory ? "bg-warning" : ""
                    }`}
                    onClick={() => setActiveCategory("")}
                >
                    All
                </li>
                {categories.map((category, index) => {
                    return (
                        <li key={index} onClick={() => setActiveCategory(category.name)}>{ category.name }</li>
                    )
                })}
            </ul>
            <button onClick={()=>{setShowAddCategory(true)}}> + category </button>
        </>
    
    );
}