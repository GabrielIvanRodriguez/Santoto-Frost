import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/item/itemDetailContainer/ItemDetailContainer'
import MainLayout from './layout/MainLayout'
import Home from '../pages/Home'


const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={'Santoto Frost'} />
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>  
          <Route path="category/:id" element={<Home/>}/>
          <Route path="item/:id" element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes