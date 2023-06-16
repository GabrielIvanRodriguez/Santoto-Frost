import React,{useContext} from 'react'
import { CartContext } from '../../../context/CartProvider';
import ItemCount from '../../item/itemCount/ItemCount';

const CartItem = ({ item }) => {

    const {quitFromCart} = useContext(CartContext);   


    return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4 d-flex">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img className="w-100" src={item.img} alt="comida"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{item.name}</p>
                        <p><span className="text-muted">{item.brand}</span></p>
                        <p><span className="text-muted">Precio por unidad: $ </span>{item.price}</p>
                        <p>x{item.quant} unidades</p>
                    </div>

                        
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">$ {(item.price * item.quant)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button onClick={()=>quitFromCart(item.id)} className="btn btn-danger btn-sm rounded-circle btn-lg btn3d p-3">X</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem