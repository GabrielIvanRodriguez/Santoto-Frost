import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalProvider from '../context/GlobalProvider'
import ItemDetailContainer from '../components/item/itemDetailContainer/ItemDetailContainer'
import MainLayout from './layout/MainLayout'
import Home from '../pages/Home/Home'
import Error from '../pages/Error/Error'
import ItemListContainer from '../components/item/itemListContainer/ItemListContainer'
import CartProvider from '../context/CartProvider'
import CartContainer from '../components/cart/cartContainer/CartContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//seteo las rutas que va a tener mi pagina, donde en cada una voy a decir qué parametro tiene, y a donde redirecciona.
//utilizo 4 rutas atómicas, y 1 que va a tener hijos dentro de ella para lograr asignarlos a traves del llamado a NavBar
//en el componente MainLayout
//tambien englobo todas las rutas con los proveedores de context para que puedan utilizarlos
const AllRoutes = () => {
  return (
    <GlobalProvider>
      
      <CartProvider>
      <ToastContainer/>
        <BrowserRouter>
        

          <Routes>
            <Route path="/" element={'Santoto Frost'} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="category/:category" element={<ItemListContainer />} />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Route>
            <Route path="*" element={<Error/>} />

          </Routes>

        </BrowserRouter>
      </CartProvider>
    </GlobalProvider>
  )
}

export default AllRoutes