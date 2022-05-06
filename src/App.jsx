import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    
     <>
     <NavBar />
     <ItemListContainer greeting='Bienvenidos a la Tienda de Tealor Made' />
     <ItemCount initial={1} stock={5} onAdd={()=>alert("Usted agregó el producto a su carrito")}/>
     </>
  );
}

export default App;
