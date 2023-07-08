import { Route, Routes } from 'react-router-dom';

import './App.css';

import { Home } from './pages/Home/Home';
import { RestaurantDetails } from './pages/RestaurantDetails/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:restaurantId' element={<RestaurantDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
