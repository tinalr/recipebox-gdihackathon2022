import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
    //Note the second argument is an empty array.
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=a5c113f14a144ce89576d7bcbc7f3dca')
            .then(response=>{setResponseData(response.data.results)})
    }, []); 

    return(
        <div>
          <p>Outside Response</p>
          {responseData &&
            responseData.map((responseData, idx) => {
            return (
            <div key={responseData.id}>
              <p>Inside Response</p>
              <p>ID: {responseData.id}</p>
              <img src={responseData.image} alt={responseData.title}/>
              <p>Title: {responseData.title}</p>
            </div>
          )})}
        </div>
    )
}

export default ApiCall