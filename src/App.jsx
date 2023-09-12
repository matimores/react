import './App.css'
import './styles/item.css'
import './styles/itemCount.css'
import './styles/CartWidget.css'
import './styles/ItemDetail.css'
import Header from './componente/Header'
import Navbar from "./componente/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './componente/itemListContainer'
import ItemDetailContainer from './componente/ItemDetailContainer'







function App() {
  return (
    <>

      <BrowserRouter>
        <Header greeting={"Envios Gratis a Partir de $8000"} />
        <Navbar />
        <Routes>


          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App







