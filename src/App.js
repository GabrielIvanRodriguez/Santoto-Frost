import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>

        <NavBar items={['Inicio', 'Categorias','Sobre nosotros','Sucursales','Contacto']} navBarLogo={'Santoto Frost'} />

      </header>
      <ItemListContainer greeting={'Bienvenidos a Santoto Frost'}/>
    </div>
  )
}

export default App
