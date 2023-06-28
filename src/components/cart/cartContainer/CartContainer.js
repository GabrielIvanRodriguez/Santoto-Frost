import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartProvider'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cartItem/CartItem';
import './CartContainer.css'
import OrderForm from '../../form/OrderForm';


const CartContainer = () => {                                                                                             //contenedor del carrito, llamado en el path /cart
  const { cart, cartClear } = useContext(CartContext);                                                                    //me traigo el carrito y la funcion para vaciarlo desde el
                                                                                                                          //contexto del carrito

  const navigate = useNavigate();                                                                                         //retorno segun la longitud del carrito, un render u otro
  return (
    <div>
      {cart.length < 1 && (
        <section className="p-0  bg-img cover-background" style={{backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)"}}>
        <div className="container-fluid d-flex flex-column">
            <div className="row align-items-center justify-content-center min-vh-100">
                <div className="col-md-9 col-lg-6 my-5">
                    <div className="text-center error-page">
                        <h1 className="mb-0 text-secondary">Carrito vacio</h1>
                        <h2 className="mb-4 text-white">Miles de productos te esperan</h2>
                        <p className="w-sm-80 mx-auto mb-4 text-white">¡Vuelve a comprar!</p>
                        <div>
                            <button onClick={() => navigate(-1)} type="button" className="btn btn-success mt-2 btn-sm btn3d">Volver </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

                  <div className="d-flex justify-content-around flex-wrap">
                      <div>
                        {cart.map((product, index) => <CartItem key={product.id} item={product} />)}
                      </div>

                      <div className="m-4">
                        <OrderForm/>
                      </div>

                  </div>

                  

                  <div className="d-flex flex-column flex-wrap justify-content-center">

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