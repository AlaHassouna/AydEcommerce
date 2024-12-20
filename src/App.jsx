import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "../src/components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { createContext, useState } from "react";
import ProductsPage from "./pages/productsPage/ProductsPage";
export const MyContext = createContext();

function App() {
  const [isLogin,setIsLogin]=useState(true);
  const [panier,setPanier]=useState([]);
  console.log("panier ",panier);
const addToCart = (cartItem) => {
  // console.log("cartItem (app) cartItem", cartItem);

  setPanier((prevPanier) => {
    console.log("prevPanier",prevPanier)
    // Vérifiez si le produit avec la même taille et couleur existe déjà dans le panier
    const existingProductIndex = prevPanier.findIndex(
      (item) =>
        item.UID === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingProductIndex !== -1) {
      // Si le produit existe, mettez à jour la quantité
      const updatedPanier = [...prevPanier];

      // console.log("cartItem.quantity ",cartItem.quantity)
      // console.log("updatedPanier (app) 00",updatedPanier)

      // console.log("updatedPanier[existingProductIndex].quantity + cartItem.quantity (app)",(updatedPanier[existingProductIndex].quantity + cartItem.quantity));
      updatedPanier[existingProductIndex].quantity = updatedPanier[existingProductIndex].quantity+cartItem.quantity;
      // console.log("updatedPanier (app)",updatedPanier)
      return updatedPanier;
    }

    // Sinon, ajoutez un nouvel élément au panier
    return [
      ...prevPanier,
      {
        UID: cartItem.id, // Correction ici
        Product: cartItem.name, // Correction ici
        Price: cartItem.price, // Correction ici
        size: cartItem.size, // Normalisation de la clé
        color: cartItem.color, // Normalisation de la clé
        quantity: cartItem.quantity, // Correction ici
        image: cartItem.image, // Normalisation de la clé
      },
    ];
  });
};
console.log("panier ",panier);
  const values={
    panier,
    setPanier,
    isLogin,
    setIsLogin,
    addToCart
  }
  return (
    <Router>
      <MyContext.Provider value={values}>
      
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
          <Route path="/product/:id" element={<Product/>}></Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<SignUp/> }></Route>
          {/* Route pour afficher tous les produits */}
        <Route path="/products" element={<ProductsPage />} />
        
        {/* Route pour afficher les produits filtrés par catégorie */}
        <Route path="/products/:categorie" element={<ProductsPage />} />
        </Routes>
      
        <Footer/>
        </MyContext.Provider>
    </Router>
  )
}

export default App

