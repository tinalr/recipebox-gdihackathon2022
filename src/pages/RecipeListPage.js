import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeListPage = () => {

  const [responseData, setResponseData] = useState([]);

  const foodDiet = "Vegan"
  // vegan, vegetarian, ketogenic
  // &diet=${foodDiet}
  // https://spoonacular.com/food-api/docs#Diets

  const foodIntolerances = ""
  // peanut, dairy, seafood, soy, wheat
  // &intolerances=${foodIntolerances}
  // https://spoonacular.com/food-api/docs#Intolerances
  // for each intolerance selected, send to this page "&intolerances=*intoleranceselected*"
  // concatenate all selections together into one variable
  // user can select 1 diet and as many intolerances as are available as buttons on previous page

  // API call retrieves 10 recipes with diet/intolerance selections
  // Only provides Image and Title and ID
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&diet=${foodDiet}&intolerances=${foodIntolerances}`)
      .then(response => { setResponseData(response.data.results) })
  }, []);

  return (
    <div>
      <h1>{foodDiet}</h1>
      {responseData &&
        responseData.map((responseData, idx) => {
          return (
          <div key={responseData.id}>
            <img src={responseData.image} alt={responseData.title}/>
            <button>{responseData.title}</button>
          </div>
        )})}
    </div>
  );
};

export default RecipeListPage;