import React,{useEffect, useState, useContext} from 'react'
import { GlobalContext } from "../../../context/GlobalProvider"

const ItemCount = ({item}) => {

    const { stock } = item;
    const { addCart } = useContext(GlobalContext)

    const [quant, setQuant] = useState(1);
    const [canAdd, setCanAdd] = useState(true);
    const [canSub, setCanSub] = useState(false);
    const [canBuy, setCanBuy] = useState(false);

    let productAdded = {...item, quant}
    
    const canIBuy = () => (stock < 0|| quant <=0) ? setCanBuy(false) : setCanBuy(true)

    const canModifyQuant = () =>{
        stock > quant ? setCanAdd(true) : setCanAdd(false);
        quant > 1 ? setCanSub (true) : setCanSub(false);
    }

    useEffect( ()=>{
        canModifyQuant();
        canIBuy();
    })///[quant, product.stock]

    const add = () => setQuant (quant+1);                                       //funcion para agregar en button add

    const subtract = () => setQuant(quant-1);                                                   //funcion para restar en button subtract



  return (
    <div>
        <p>Cantidades disponibles: {stock - quant}</p>
        <button disabled={!canSub} onClick={subtract} type="button" className="btn btn-danger"><i className="bi-cart-dash"></i></button>
        <button disabled={!canBuy} onClick={() => addCart(productAdded)} type="button" className="btn btn-success m-1">Añadir al carrito <i className="bi-cart-fill"></i></button>
        <button disabled={!canAdd} onClick={add} type="button" className="btn btn-outline-primary"><i className="bi-cart-plus"></i></button>
    </div>

  )
}

export default ItemCount