import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux';
import store from './redux/store';
import Favourites from './pages/Favourites';
import RecipeDetails from './pages/RecipeDetails';
function App() {
  return (
    <div >
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Toaster />
          <Routes>
            <Route path='https://recipe-mernapp-ided.onrender.com/' element={<Home />} />
            <Route path="https://recipe-mernapp-ided.onrender.com/about" element={<About />} />
            <Route path="https://recipe-mernapp-ided.onrender.com/login" element={<Login />} />
            <Route path="https://recipe-mernapp-ided.onrender.com/signup" element={<Signup />} />
            <Route path="https://recipe-mernapp-ided.onrender.com/recipe/:id" element={<RecipeDetails />} />
            <Route path='https://recipe-mernapp-ided.onrender.com/favourites' element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
