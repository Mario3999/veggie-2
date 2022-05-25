import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
