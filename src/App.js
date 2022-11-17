import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import RecipeListPage from './pages/RecipeListPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import AboutUsPage from './pages/AboutUsPage';
import Error from './components/Error'

function App() {
  return (
    <main className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginRegisterPage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route element={Error} /> 
        {/* Error component isn't rendering when I use an incorrect path */}
      </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </main>
  );
}

export default App;
