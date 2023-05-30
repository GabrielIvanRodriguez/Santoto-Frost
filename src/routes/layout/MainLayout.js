import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'

const navBarItems=[
  {
    path:"/category/todos",
    name:"Todos"
  },
  {
    path:"/category/elaborados",
    name:"Elaborados"
  },
  {
    path:"/category/pastas",
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