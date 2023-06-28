import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'
import useSendOrder from '../../hooks/useSendOrder'
import { sameEmail } from "../../helpers/index"
import './OrderForm.css'

const OrderForm = () => {

    const { cart, cartClear } = useContext(CartContext)                                             //me traigo el carrito y la funcion para vaciarlo desde el context
    const { loadOrder } = useSendOrder();                                                           //traigo una funcion que implemento como custom hook para enviar orders
    const [emailConfirm, setEmailConfirm] = useState(false);                                        //una variable de estado que habilita el botón comprar

    const [form, setForm] = useState({                                                              //se setea al renderizar el componente una variable de estado de un objeto con un
        buyer: {                                                                                    //comprador con todos sus atributos, los items en carrito y el total a pagar
            email: '',
            name: '',
            lastName: '',
            phoneNumber: ''
        },
        cart,
        total: 0

    })

    const { buyer: { email} } = form;                                                               //descontracturo email del buyer del form

    useEffect(() => {                                                                               //controlo el ciclo del componente haciendo que apenas suceda un cambio/renderice
        const total = cart.reduce((prev, curr) => prev + (curr.price * curr.quant), 0)              //me calcule el total
        setForm({                                                                                   //y setee la variable de form 
            ...form,                                                                                //con los datos del form existentes
            total                                                                                   //y el total calculado en tiempo real
        })
    }, [cart])                                                                                      //con el carrito como dependencia


    const handleChange = (e) => {                                                                   //manejo el cambio de los inputs 
        const { id, value } = e.target;                                                             //extrayendo id y value del atributo target del evento
        setForm({                                                                                   //seteando en la variable de estado de form
            ...form,                                                                                //una copia del form existente
            buyer: {                                                                                         
                ...form.buyer,                                                                      //una copia descontracturada de los datos del comprador existente
                [id]: value                                                                         //la nueva modificacion generada en el input donde sucede el evento change
            }
        })
    }
    
    const handleChangeEmail = (e)=>{                                                                //manejo el change del input email
        const value = e.target.value;
        setEmailConfirm(sameEmail(email,value));                                                    //comparando constantemente hasta que los correos sean iguales
    }

   
    const navigate = useNavigate();


    const handleSubmit = (e) => {                                                                   //manejo el evento submit
        e.preventDefault();                                                                         //previniendo eventos de default (actualizado) para aprovechar las ventajas de react y evitar recargar la pagina
        loadOrder({ data: form});                                                                   //envio una orden a base de datos con los datos de form a través de la funcion del custom hook
        cartClear();                                                                                //limpio el carrito
        navigate('/')                                                                               //voy al inicio
    }


                                                                                                        //renderizo el checkout
    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-around">
                <h1>CheckOUT</h1>
                <div className="form-group">
                    <label htmlFor="name" className="d-flex align-items-start">Nombre</label>
                    <input onChange={handleChange} type="text" className="form-control mb-2" id="name" aria-describedby="emailHelp" placeholder="Escribe tu nombre" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="d-flex align-items-start ">Apellido</label>
                    <input onChange={handleChange} type="text" className="form-control mb-2" id="lastName" aria-describedby="emailHelp" placeholder="Escribe tu apellido" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="d-flex align-items-start">Número de celular</label>
                    <input onChange={handleChange} type="number" className="form-control mb-2 " id="phoneNumber" aria-describedby="emailHelp" placeholder="Contacto" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="d-flex align-items-start">Correo electrónico</label>
                    <input onChange={handleChange} type="email" className="form-control mb-2" id="email" aria-describedby="emailHelp" placeholder="Escribe tu email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmedEmail" className="d-flex align-items-start">Confirmar correo electrónico</label>
                    <input onChange={handleChangeEmail} type="email" className="form-control mb-2" id="confirmedEmail" aria-describedby="emailHelp" placeholder="Reescribe tu email" required/>
                    {!emailConfirm && <p style={{fontSize:'11px', color:'red', textAlign:'start'}}>Los emails deben coincidir</p>}
                </div>
                <button disabled={!emailConfirm} type="submit" className="btn btn-primary m-3 btn-lg btn3d" >Comprar</button>
            </form>
            <h3 className="bg-info text-white rounded">Total: $ {form.total}</h3>
        </div>

    )
}

export default OrderForm