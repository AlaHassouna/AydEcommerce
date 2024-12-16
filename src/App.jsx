import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "../src/components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>

    </Router>
  )
}

export default App
