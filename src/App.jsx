import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "../src/components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { createContext, useEffect, useState } from "react";
import ProductsPage from "./pages/productsPage/ProductsPage";
import Checkout from "./pages/checkout/Checkout";
import Profil from "./pages/profil/Profil";
export const MyContext = createContext();

function App() {
  const [isLogin,setIsLogin]=useState();
  const [panier, setPanier] = useState([]);
  // const [account,setAccount]=useState({
  //   "Nom":"Ala Hsouna",
  //   "Email": "exemple@gmail.com",
  //   "Adresse": "123 Rue de la Paix, Tunis, Tunisie",
  //   "Phone_1": "+216 98 123 456",
  //   "Phone_2": "+216 29 654 321",
  //   "Gouvernorat": "Tunis",
  //   "Delegation": "La Marsa"
  // })
  // Récupérer les données de 'user' depuis localStorage
  const [account, setAccount] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
  
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setAccount(parsedUser);
    }
  }, []); // 🔹 Mettre un tableau vide [] pour s'exécuter une seule fois au chargement de la page
  
  // useEffect(() => {
  //   console.log("account ",account)
    
  // }, [account]); 
  

  useEffect(() => {
    const savedPanier = localStorage.getItem("panier");
    if (savedPanier) {
      try {
        const parsedPanier = JSON.parse(savedPanier);
  
        // Vérifier si les données sont valides
        if (Array.isArray(parsedPanier) && parsedPanier.every(item => item.UID && item.quantity)) {
          setPanier(parsedPanier);
        } else {
          console.warn("Données corrompues dans localStorage, réinitialisation...");
          localStorage.setItem("panier", JSON.stringify([]));
          setPanier([]);
        }
      } catch (error) {
        console.error("Erreur de parsing JSON dans localStorage :", error);
        localStorage.setItem("panier", JSON.stringify([]));
        setPanier([]);
      }
    }
  }, []);

  const addToCart = (cartItem) => {
    setPanier((prevPanier) => {
      // Vérifiez si le produit avec la même taille et couleur existe déjà dans le panier
      const existingProductIndex = prevPanier.findIndex(
        (item) =>
          item.UID === cartItem.id &&
          item.size === cartItem.size &&
          item.color === cartItem.color
      );
  
      let updatedPanier;
      if (existingProductIndex !== -1) {
        // Si le produit existe, mettez à jour la quantité
        updatedPanier = [...prevPanier];
        updatedPanier[existingProductIndex].quantity += cartItem.quantity;
      } else {
        // Sinon, ajoutez un nouvel élément au panier
        updatedPanier = [
          ...prevPanier,
          {
            UID: cartItem.id,
            Product: cartItem.name,
            Price: cartItem.price,
            OldPrice: cartItem.OldPrice || null, // Ajout de OldPrice
            size: cartItem.size,
            color: cartItem.color,
            quantity: cartItem.quantity,
            image: cartItem.image,
          },
        ];
      }
  
      // Sauvegarder le panier mis à jour dans localStorage
      localStorage.setItem("panier", JSON.stringify(updatedPanier));
  
      return updatedPanier; // Retourner le panier mis à jour
    });
  };// Ce useEffect ne s'exécute qu'une seule fois au premier rendu

  const values={
    panier,
    setPanier,
    isLogin,
    setIsLogin,
    addToCart,
    account,
    setAccount
  }
  return (
    <Router>
      <MyContext.Provider value={values}>
      
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
          <Route path="/product/:id" element={<Product/>}></Route>

          {/* <Route path="/login" element={<Login/>}></Route> */}
          <Route 
          path="/login" 
          element={Object.keys(account).length === 0 ? <Login/> : <Navigate to="/" />} 
        />
        <Route 
          path="/register" 
          element={Object.keys(account).length === 0 ? <SignUp/> : <Navigate to="/" />} 
        />
          {/* <Route path="/register" element={<SignUp/> }></Route> */}
          {/* Route pour afficher tous les produits */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Route pour afficher les produits filtrés par catégorie */}
        <Route path="/products/:categorie" element={<ProductsPage />} />
        <Route 
          path="/profil" 
          element={Object.keys(account).length === 0 ? <Navigate to="/login" /> : <Profil />} 
        />
        </Routes>
      
        <Footer/>
        </MyContext.Provider>
    </Router>
  )
}

export default App

