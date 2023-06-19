import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'
import useSendOrder from '../../hooks/useSendOrder'
import { sameEmail } from "../../helpers/index"
import './OrderForm.css'

const OrderForm = () => {

    const { cart, cartClear } = useContext(CartContext)
    const { loadOrder } = useSendOrder();
    const [emailConfirm, setEmailConfirm] = useState(false);

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            lastName: '',
            phoneNumber: ''
        },
        cart,
        total: 0

    })

    const { buyer: { email} } = form;

    useEffect(() => {
        const total = cart.reduce((prev, curr) => prev + (curr.price * curr.quant), 0)
        setForm({
            ...form,
            total
        })
    }, [cart])


    const handleChange = (e) => {     
        const { id, value } = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [id]: value
            }
        })
    }
    
    const handleChangeEmail = (e)=>{
        const value = e.target.value;
        setEmailConfirm(sameEmail(email,value));
    }

   
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        loadOrder({ data: form});
        cartClear();
        navigate('/')        
    }



    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-around">
                <h1>CheckOUT</h1>
                <div className="form-group">
                    <label htmlFor="email" className="d-flex align-items-start">Correo electrónico</label>
                    <input onChange={handleChange} type="email" className="form-control mb-2" id="email" aria-describedby="emailHelp" placeholder="Escribe tu email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmedEmail" className="d-flex align-items-start">Confirmar correo electrónico</label>
                    <input onChange={handleChangeEmail} type="email" className="form-control mb-2" id="confirmedEmail" aria-describedby="emailHelp" placeholder="Reescribe tu email" required/>
                    {!emailConfirm && <p style={{fontSize:'11px', color:'red', textAlign:'start'}}>Los emails deben coincidir</p>}
                </div>
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
                <button disabled={!emailConfirm} type="submit" className="btn btn-primary m-3 btn-lg btn3d" >Comprar</button>
            </form>
            <h2>Total: $ {form.total}</h2>
        </div>

    )
}

export default OrderForm