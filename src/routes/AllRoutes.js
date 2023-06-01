import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/item/itemDetailContainer/ItemDetailContainer'
import MainLayout from './layout/MainLayout'
import Home from '../pages/Home'
import ItemListContainer from '../components/item/itemListContainer/ItemListContainer'

                                                          //seteo las rutas que va a tener mi pagina, donde en cada una voy a decir qué parametro tiene, y a donde redirecciona.
                                                          //utilizo 4 rutas atómicas, y 1 que va a tener hijos dentro de ella para lograr asignarlos a traves del llamado a NavBar
                                                          //en el componente MainLayout
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={'Santoto Frost'} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>  
          <Route path="category/:category" element={<ItemListContainer/>}/>
          <Route path="item/:id" element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes