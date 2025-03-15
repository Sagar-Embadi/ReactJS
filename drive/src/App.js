
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar1 } from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Product/Product';
import { Cart } from './Pages/Cart/Cart';
import { Fav } from './Pages/Fav/Fav';

function App() {
  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/favorites' element={<Fav/>} />
    </Routes>
    </>
  );
}

export default App;
