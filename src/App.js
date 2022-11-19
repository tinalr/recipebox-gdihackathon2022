
import './App.css';

import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RecipeListPage from './pages/RecipeListPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import AboutUsPage from './pages/AboutUsPage';

import SavedRecipesDetail from './components/SavedRecipesDetail';

import Error from './components/Error';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DisplayRecipe from './components/DisplayRecipe';


function App() {
  const [stateDataIntolerances, setStateDataIntolerances] = useState("");
  const [stateDataDiet, setStateDataDiet] = useState("");

  const pull_data = (data) => {
    setStateDataIntolerances(data); // LOGS DATA FROM CHILD (array)
  }

  const pull_data2 = (data2) => {
    setStateDataDiet(data2); // LOGS DATA FROM CHILD (array)
  }

  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage func={pull_data} func2={pull_data2} />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='collections' element={<SavedRecipesPage />} />

        <Route path='collections/:id' element={<SavedRecipesDetail />} />


        <Route path='recipes' element={<RecipeListPage intolerances={stateDataIntolerances} diet={stateDataDiet} />} />
        <Route path='show/:id' element={<DisplayRecipe />} />

        {/* for testing only */}
        <Route path='detail' element={<SavedRecipesDetail />} />
        {/* for testing only */}

        <Route element={Error} />
        {/* Error component isn't rendering when I use an incorrect path */}
      </Routes>
    </main>
  );
}

export default App;
