import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AllRecipes = ({ recipes, deleteRecipe }) => {
  const navigate = useNavigate();

  function toAllRecipes() {
    navigate("/AllRecipes");
  }
  function toNewRecipe() {
    navigate("/NewRecipe");
  }
  function toSearch() {
    navigate("/SearchRecipe");
  }
  return (
    <div className="flex">
      <div className="leftSide">
        <button onClick={toAllRecipes}>All Recipes</button>
        <br />
        <button onClick={toNewRecipe}>Add New Recipe</button>
        <br />
        <button onClick={toSearch}>Search Recipe</button>
        <br />
      </div>
      <div className="rightSide">
        <h1>All Recipes</h1>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.Id}>
              <h2>{recipe.Title}</h2>
              <p>Ingredients</p>
              <ul>
                {recipe.Ingredients.map((ing, i) => {
                  return <li key={i}>{ing}</li>;
                })}
              </ul>
              <p>Instructions</p>
              <p>{recipe.Instructions}</p>
              <button onClick={() => deleteRecipe(recipe.Id)}>
                Delete Recipe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
