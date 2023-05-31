import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

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
    </Fragment>
  )
}

export default MainLayout