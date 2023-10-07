import './App.css'
import './styles/itemCart.css'
import './styles/item.css'
import './styles/itemCount.css'
import './styles/CartWidget.css'
import './styles/ItemDetail.css'
import './styles/Cart.css'
import './styles/Checkout.css'
import Header from './componente/Header'
import Navbar from "./componente/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './componente/itemListContainer'
import ItemDetailContainer from './componente/ItemDetailContainer'
import { CartProvider } from './context/cartContext'
import Cart from './componente/Cart'
import Checkout from './componente/Checkout'



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header greeting={"Envios Gratis a Partir de $8000"} />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:detalleId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart /> } /> 
            <Route exact path="/Checkout" element={<Checkout />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App







