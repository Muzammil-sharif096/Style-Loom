
import './App.css';
import Contactscreen from './Screens/Contactscreen';
import ProductDetailscreen from './Screens/ProductDetailscreen';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/HomeMain/Home';
import Products from './Components/Products/ProductsMain/Products';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/productdetail' element={<ProductDetailscreen />} />
        <Route path='/contact' element={<Contactscreen />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;














