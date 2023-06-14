import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartProvider'
import CartItem from '../cartItem/CartItem';

const CartContainer = () => {
  const { cart, cartClear} = useContext(CartContext);

  const navigate = useNavigate();

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
                    {cart.map((product, index) => <CartItem key={index} item={product} />)}
                  </div>

                  <div>
                    <div>
                      <button type="button" className="btn btn-primary btn-block btn-lg mb-2">Comprar</button>
                    </div>
                  </div>

                  <div>
                    <div >
                      <button onClick={cartClear} type="button" className="btn btn-outline-danger btn-block btn-lg">Vaciar carrito</button>
                    </div>
                  </div>

                  <div>
                    <div >
                      <button onClick={() =>navigate(-1)} type="button" className="btn btn-outline-danger btn-block btn-lg">Volver</button>
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