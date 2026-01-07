import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchRecipe = ({ recipes }) => {
  const [title, setTitle] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);
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
  function searchRecipes(val) {
    setTitle(val);
    let includesWord = [];
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].Title.toLowerCase().includes(val.toLowerCase()))
        includesWord.push(recipes[i]);
    }
    setSearchedRecipes(includesWord);
  }
  return (
    <div className="flex">
      <div className="leftSide">
        <button onClick={toAllRecipes}>All Recipes</button>
        <br />
        <button onClick={toNewRecipe}>Add New Recipe</button>
        <br />
        <button onClick={toSearch}>Search Recipe</button>
      </div>
      <div className="rightSide">
        <div className="searchRecipesPages">
          <h1>Search Recipes</h1>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => searchRecipes(e.target.value)}
          />
          {searchedRecipes.length !== 0 &&
            searchedRecipes.map((recipe) => {
              return (
                <div key={recipe.Id}>
                  <h2>{recipe.Title}</h2>
                  <p>
                    Ingredients: {recipe.Ingredients.map((ing) => ing + ", ")}
                  </p>
                  <p>Instructions: {recipe.Instructions}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
