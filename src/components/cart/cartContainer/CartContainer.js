import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartProvider'
import CartItem from '../cartItem/CartItem';
import './CartContainer.css'
import OrderForm from '../../form/OrderForm';


const CartContainer = () => {
  const { cart, cartClear, setInCart } = useContext(CartContext);

  setInCart(true);


  return (
    <div>
      {cart.length < 1 && (
        <div>
          <p>Carrito vacío</p>
        </div>
      )}

      {cart.length > 0 && (
        <div>
          <section className="h-100">
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0 text-black">Carrito</h3>
                  </div>

                  <div>
                    {cart.map((product, index) => <CartItem key={product.id} item={product} />)}
                  </div>

           

                  <div className="d-flex flex-column flex-wrap justify-content-center">
                    <div>
                      <div>
                        <button type="button" className="btn btn-primary btn-block mb-2 btn-lg btn3d">Comprar</button>
                      </div>
                    </div>

                    <div>
                      <div >
                        <button onClick={cartClear} type="button" className="btn btn-danger btn-lg btn3d btn-block btn-lg">Vaciar carrito</button>
                      </div>
                    </div>


                  </div>


                </div>
              </div>
            </div>
          </section>
        </div>
      )}



    </div>
  )


}

export default CartContainer