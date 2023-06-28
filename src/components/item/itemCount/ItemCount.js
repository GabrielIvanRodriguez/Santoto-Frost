import React, {useEffect, useState } from 'react'
import './ItemCount.css'



const ItemCount = ({ initial, item, onAdd}) => {


  const [canAdd, setCanAdd] = useState(true);                                                                 //variable de estado que permite agregar items
  const [canSub, setCanSub] = useState(false);                                                                 //variable de estado que permite sacar items
  const [canBuy, setCanBuy] = useState(false);                                                                 //variable de estado que permite comprar los items
  const [quant, setQuant] = useState(initial);                                                                 //variable de estado para reflejar la cantidad elegida de items





  const canModifyQuant = () => {                                                                               //funcion que define si puedo modificar el contador basandome en
    item.stock > quant ? setCanAdd(true) : setCanAdd(false);                                                  // si el stock es mayor que la cantidad del contador
    quant > 1 ? setCanSub(true) : setCanSub(false);                                                           //y si ya seleccione alguna cantidad (en el contador)
  }

  const canIBuy = () => (item.stock < 0 || quant <= 0) ? setCanBuy(false) : setCanBuy(true)                     //funcion que me permite comprar si hay stock disponible o si la cantidad seleccionada a comprar es valida

  useEffect(() => {                                                                                         //controlo el ciclo del componente para corroborar con cada cambio si puedo
    canModifyQuant();                                                                                       //modificar la cantidad del contador seleccionada o
    canIBuy();                                                                                              //si puedo comprar
  },[quant, item.stock])                                                                                   //generando dependencia con la cantidad y el stock

  const add = () => setQuant(quant + 1);                                                                    //funcion para agregar en button add

  const subtract = () => setQuant(quant - 1)                                                                //funcion para restar en button sub


                                                                                                                          //renderizo contador
  return (
        <div>
          <p>Stock disponible: {item.stock - quant}</p>
          <p>Subtotal: ${item.price * quant}</p>
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