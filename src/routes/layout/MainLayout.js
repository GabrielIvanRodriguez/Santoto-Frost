import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

const navBarItems=[
  {
    path:"/category/Productos Elaborados",
    name:"Productos elaborados"
  },
  {
    path:"/category/Pastas",
    name:"Pastas"
  }
]

const MainLayout = () => {
  return (
    <Fragment>
      <NavBar navBarItems={navBarItems}/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout