import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "../src/components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";



function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products/:id" element={<Product/>}></Route>
        </Routes>
      
        <Footer/>
     
    </Router>
  )
}

export default App
