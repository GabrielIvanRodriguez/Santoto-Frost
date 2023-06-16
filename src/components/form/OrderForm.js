import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartProvider'
import useSendOrder from '../../hooks/useSendOrder'
import { formValidation } from "../../helpers/index"
import './OrderForm.css'

const OrderForm = () => {

    const { cart, cartClear } = useContext(CartContext)
    const { loadOrder } = useSendOrder();

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

    useEffect(() => {
        const total = cart.reduce((prev, curr) => prev + (curr.price * curr.quant), 0)
        setForm({
            ...form,
            total
        })
    }, [cart])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value
            }
        })
    }

    const { buyer: { email, name, lastName, phoneNumber } } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation([email, name, lastName, phoneNumber])) {
            alert('faltan campos')
        }
        loadOrder({ data: form });
        cartClear();
        alert('orden generada')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-around">
                <h1>CheckOUT</h1>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Escribe tu email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Escribe tu nombre"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input onChange={handleChange} type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Escribe tu apellido"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Número de celular</label>
                    <input onChange={handleChange} type="number" className="form-control " id="phoneNumber" aria-describedby="emailHelp" placeholder="Contacto"/>
                </div>
                <button type="submit" className="btn btn-primary m-3 btn-lg btn3d">Comprar</button>
            </form>
            <h2>Total: $ {form.total}</h2>
        </div>

    )
}

export default OrderForm