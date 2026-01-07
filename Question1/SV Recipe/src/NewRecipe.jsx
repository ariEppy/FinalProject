import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
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
  function newRecipe() {
    let error = false;
    // check that the title has at least one char and <15
    if (title.length < 1 || title.length > 15) {
      error = true;
      alert("the Title must be between 1 and 15 characters");
    }
    // seperate the ingredients into an array
    let ingredientsArray = ingredients.trim().split(" ");
    if (ingredientsArray.length === 0) {
      error = true;
      alert("there must be at least 1 ingredient");
    } else if (ingredientsArray.some((ingredient) => ingredient === "")) {
      error = true;
      alert("use one space to seperate ingredients");
    }
    // desciption is max 200 chars
    if (instructions.length > 200) {
      error = true;
      alert("the maximum length for instructions is 200 characters");
    }
    if (error === false) {
      addRecipe(title, ingredientsArray, instructions);
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
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
        <h1>Add New Recipe</h1>
        <div className="newRecipePage">
          <p>Title</p>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Ingredients</p>
          <input
            type="text"
            placeholder="Ingredients seperated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <p>Instructions</p>
          <textarea
            type="text"
            placeholder="Recipe Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <br />
          <br />
          <button onClick={newRecipe}>Add Recipe</button>
        </div>
      </div>
    </div>
  );
};
