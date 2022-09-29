import React from "react";

const DisplayRecipes = ()=>{
    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]

    const listIngredients = (ingredients)=>(
        ingredients.map((ingredient,index)=>(
            <li className = "ingredient" key={ingredient+index} >{ingredient}</li>
        ))
    );

    const cakesList = cakes.map((cake)=>(
        <div className="cake-card">
        <h3>{cake.cakeName}</h3>
        <ul>
            {listIngredients(cake.ingredients)}
        </ul>
        <p>Cake rating: {cake.rating}</p>
        </div>
    ))

    // IMPORTANT: have to use normal brackets with map function when using react.


    return (
        <div className="display-recipes">
            <h2>Welcome to the Bakery!</h2>
            <img src ="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" alt="Image of cake"/>
            <div className="cakes__container">{cakesList}</div>
            
        </div>
    );


}

export default DisplayRecipes;