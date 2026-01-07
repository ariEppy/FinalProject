import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Users } from "./data/Users";
import { AllRecipes } from "./AllRecipes";
import { Recipes } from "./data/Recipes";
import { NewRecipe } from "./NewRecipe";
import { SearchRecipe } from "./SearchRecipe";

function App() {
  const [users, setUsers] = useState(Users);
  const [recipes, setRecipes] = useState(Recipes);

  function addUser(username, password) {
    let newPerson = { username, password };
    setUsers((person) => [...person, newPerson]);
  }

  function deleteRecipe(id) {
    let newRecipeList = [];
    for (let r = 0; r < recipes.length; r++) {
      if (recipes[r].Id !== id) newRecipeList.push(recipes[r]);
    }
    setRecipes(newRecipeList);
  }
  function addRecipe(Title, Ingredients, Instructions) {
    let Id = Date.now();
    let newRecipe = { Id, Title, Ingredients, Instructions };
    setRecipes((recipe) => [...recipe, newRecipe]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn users={users} />}></Route>
        <Route path="/SignUp" element={<SignUp addUser={addUser} />}></Route>
        <Route
          path="/AllRecipes"
          element={<AllRecipes recipes={recipes} deleteRecipe={deleteRecipe} />}
        ></Route>
        <Route
          path="/NewRecipe"
          element={<NewRecipe addRecipe={addRecipe} />}
        ></Route>
        <Route
          path="SearchRecipe"
          element={<SearchRecipe recipes={recipes} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
