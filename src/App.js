import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RecipeListPage from './pages/RecipeListPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import AboutUsPage from './pages/AboutUsPage';

import SavedRecipesDetail from './pages/SavedRecipesDetail';

import Error from './components/Error';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='saved-recipes' element={<SavedRecipesPage />} />
        <Route path='recipes' element={<RecipeListPage />} />

        <Route path='register' element={<RegisterForm />}/>

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
