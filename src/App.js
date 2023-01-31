import "./App.css";
import NavBar from "./Componentes/NavBar";
import Articulos from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Cart from "./Componentes/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import MiCarritoDatos from "./MiCarritoContext";
import BarraLateral from "./Componentes/BarraLateral";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MiCarritoDatos>
          <NavBar />
          <Routes>
            <Route path="/" element={<BarraLateral />} />
            <Route path="/Categoria/:categoria" element={<BarraLateral />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Articulos />} />
            <Route path="/Categoria/:categoria" element={<Articulos />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MiCarritoDatos>
      </div>
    </BrowserRouter>
  );
}

export default App;
