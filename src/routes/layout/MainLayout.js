import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'

const navBarItems=[                                                         //seteo los path de cada categoria para llevarlos al navBar
  {
    path:"/category/Productos elaborados",
    name:"Productos elaborados"
  },
  {
    path:"/category/Pastas",
    name:"Pastas"
  },
  {
    path:"/category/Panificacion",
    name:"Panificacion"
  },
  {
    path:"/category/Pescados",
    name:"Pescados"
  },
  {
    path:"/category/Papas",
    name:"Papas"
  }
]

const MainLayout = () => {                                        //llamo al componente NavBar con los items que van a aparecer en ella, le doy espacio a un contenido dinamico que
                                                                  //es el unico que va a cambiar, y luego ubico el footer que, al igual que la navBar, se mantendrá estatico
  return (
    <Fragment>
      <NavBar navBarItems={navBarItems}/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout