import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../../context/CartProvider';


const ItemCount = ({ initial, stock, onAdd }) => {

  const [quant, setQuant] = useState(initial);
  const [canAdd, setCanAdd] = useState(true);
  const [canSub, setCanSub] = useState(false);
  const [canBuy, setCanBuy] = useState(false);


  const canIBuy = () => (stock < 0 || quant <= 0) ? setCanBuy(false) : setCanBuy(true)

  const canModifyQuant = () => {
    stock > quant ? setCanAdd(true) : setCanAdd(false);
    quant > 1 ? setCanSub(true) : setCanSub(false);
  }

  useEffect(() => {
    canModifyQuant();
    canIBuy();
  })///[quant, product.stock]

  const add = () => setQuant(quant + 1);                                       //funcion para agregar en button add

  const subtract = () => setQuant(quant - 1);                                                   //funcion para restar en button subtract



  return (
    <div>
        <div>
          <p>Stock: {stock - quant}</p>
          <div className="d-flex justify-content-center">
            <button disabled={!canSub} onClick={subtract} type="button" className="btn btn-outline-danger "><i className="bi bi-dash-circle-fill"></i></button>
            <span>{quant}</span>
            <button disabled={!canAdd} onClick={add} type="button" className="btn btn-outline-primary"><i className="bi bi-plus-circle-fill"></i></button>
            <button disabled={!canBuy} onClick={onAdd(quant)} type="button" className="btn btn-primary mx-1">Agregar al carrito</button>
          </div>
        </div>
    </div>

  )
}

export default ItemCount