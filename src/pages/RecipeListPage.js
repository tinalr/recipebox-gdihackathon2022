import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeListPage = () => {

  const [responseData, setResponseData] = useState([]);

  const foodDiet = "vegan"
  // vegan, vegetarian, Gluten Free
  // &diet=${foodDiet}
  // https://spoonacular.com/food-api/docs#Diets

  const foodIntolerance = 
  // peanut, dairy, seafood, soy
  // &intolerances=${foodIntolerance}
  // https://spoonacular.com/food-api/docs#Intolerances

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&query=${foodDiet}`)
      .then(response => { setResponseData(response.data.results) })
  }, []);

  return (
    <div>
      <p>Outside Response</p>
      {responseData &&
        responseData.map((responseData, idx) => {
          return <div key={idx}>
            <p>Inside Response</p>
            <p>{responseData.title}</p>
          </div>
        })}
    </div>
  );
};

export default RecipeListPage;