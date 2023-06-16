import React, {useEffect, useState } from 'react'
import './ItemCount.css'



const ItemCount = ({ initial, item, onAdd}) => {


  const [canAdd, setCanAdd] = useState(true);
  const [canSub, setCanSub] = useState(false);
  const [canBuy, setCanBuy] = useState(false);
  const [quant, setQuant] = useState(initial);





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
        <div>
          <p>Stock disponible: {item.stock - quant}</p>
          <div className="d-flex justify-content-center">
            <button disabled={!canSub} onClick={subtract} type="button" className="btn btn-success rounded-circle btn-lg btn3d"><i className="bi bi-dash-circle-fill"></i></button>
            <span className="btn rounded-circle btn-lg btn3d">{quant}</span>
            <button disabled={!canAdd} onClick={add} type="button" className="btn btn-primary rounded-circle  btn-lg btn3d"><i className="bi bi-plus-circle-fill"></i></button>
          </div>
          <button disabled={!canBuy} onClick={() => onAdd(quant)} type="button" className="btn btn-primary mx-1 mt-3 btn3d">Agregar al carrito</button>
        </div>

      )

}

export default ItemCount