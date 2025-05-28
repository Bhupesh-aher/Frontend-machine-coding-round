import React, { useState } from 'react'
import recipesData from "./recipesData"
import "./style.css"


const FilterRecipe = () => {
    const [minirating, setMinirating] = useState(4);
    const [cart, setCart] = useState([]);
    
    const FilterRecipes = recipesData.filter((recipe) => recipe.rating >= minirating);
    
    
    const avergeRating = FilterRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) / (FilterRecipes.length || 1);
    
    const addToCard = (recipe) => {
        setCart((prevRecipe) => ([...prevRecipe, recipe]));
    }

    const totalCartItems = cart.length;
    return (
        <div className='app-container'>
            <h2>Recipe Explorer</h2>
            <div className='filter-cart-section'>
                <div>
                    <label htmlFor="ratingFilter">Filter by Rating :</label>
                    <select id="ratingFilter" value={minirating} onChange={(e) => setMinirating(parseFloat(e.target.value))}>
                        <option value={4.0}>4.0</option>
                        <option value={4.3}>4.3</option>
                        <option value={4.5}>4.5</option>
                        <option value={4.7}>4.7</option>
                        <option value={4.9}>4.9</option>
                    </select>
                </div>

                <h3 className='cart-items'>Card Items: {totalCartItems}</h3>

            </div>
            <h3>Averge Rating: {avergeRating.toFixed(2)} ({FilterRecipes.length}{" "} recipes)</h3>

            <div  className='recipe-cards-container'>
                {
                    FilterRecipes.map((recipe) => (
                        <div className='recipe-card' key={recipe.id}>
                            <img  src={recipe.image} alt={recipe.name} />
                            <h4>{recipe.name}</h4>
                            <p>🥄 Cuisine: {recipe.cuisine}</p>
                            <p>⭐ Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
                            <button className='add-to-cart-btn' onClick={() => addToCard(recipe)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterRecipe