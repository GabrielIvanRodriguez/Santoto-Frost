import React, { Fragment, useEffect, useState, useContext } from 'react'
import './ItemCount.css'
import { CartContext } from '../../../context/CartProvider'


const ItemCount = ({ initial, item, onAdd }) => {


  const [canAdd, setCanAdd] = useState(true);
  const [canSub, setCanSub] = useState(false);
  const [canBuy, setCanBuy] = useState(false);
  const [quant, setQuant] = useState(initial);


  const { inCart } = useContext(CartContext);



  const canModifyQuant = () => {
    item.stock > quant ? setCanAdd(true) : setCanAdd(false);
    quant > 1 ? setCanSub(true) : setCanSub(false);
  }

  const canIBuy = () => (item.stock < 0 || quant <= 0) ? setCanBuy(false) : setCanBuy(true)

  useEffect(() => {
    canModifyQuant();
    canIBuy();
  })///[quant, product.stock]

  const add = () => setQuant(quant + 1);                                       //funcion para agregar en button add

  const subtract = () => setQuant(quant - 1)



  return (
    <Fragment>
      {inCart && (
        <div className="d-flex flex-column justify-content-center">
          <p>Stock disponible: {item.stock - quant}</p>
          <div>
            <button disabled={!canSub} onClick={() => onAdd(quant - 1)} type="button" className="btn btn-success rounded-circle btn-lg btn3d"><i className="bi bi-dash-circle-fill"></i></button>
            <span className="btn rounded-circle btn-lg btn3d">{quant}</span>
            <button disabled={!canAdd} onClick={() => onAdd(quant + 1)} type="button" className="btn btn-primary rounded-circle  btn-lg btn3d"><i className="bi bi-plus-circle-fill"></i></button>  
          </div>
        </div>
      )}

      {!inCart && (
        <div>
          <p>Stock disponible: {item.stock - quant}</p>
          <div className="d-flex justify-content-center">
            <button disabled={!canSub} onClick={subtract} type="button" className="btn btn-success rounded-circle btn-lg btn3d"><i className="bi bi-dash-circle-fill"></i></button>
            <span className="btn rounded-circle btn-lg btn3d">{quant}</span>
            <button disabled={!canAdd} onClick={add} type="button" className="btn btn-primary rounded-circle  btn-lg btn3d"><i className="bi bi-plus-circle-fill"></i></button>
          </div>
          <button disabled={!canBuy} onClick={() => onAdd(quant)} type="button" className="btn btn-primary mx-1 mt-3 btn3d">Agregar al carrito</button>
        </div>

      )}


    </Fragment>

  )
}

export default ItemCount