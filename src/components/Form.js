import React from "react";
import Search from "./Search";

const Form =()=>{


    return (
        <form>
            <p> Recipe Name</p>
            <input type="text" id="recipe-search" value="Name"/>
            <p> Ingredients</p>
            <input type="text" id="recipe-search" value="Ingredients"/>
        </form>
    );
}

export default Form;