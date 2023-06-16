import React,{useContext, useEffect,useState} from 'react'
import { CartContext } from '../../context/CartProvider'
import useSendOrder from '../../hooks/useSendOrder'
import {formValidation} from "../../helpers/index"

const OrderForm = () => {

    const { cart, cartClear} = useContext(CartContext)
    const {loadOrder} = useSendOrder();

    const [form, setForm] = useState({
        buyer:{
            email:'',
            name:'',
            lastName:'',
            phoneNumber:''
        },
        cart,
        total:0
    })

    useEffect( ()=>{
        const total = cart.reduce( (prev,curr) => prev + (curr.price * curr.quant), 0)
        setForm({
            ...form,
            total
        })
    },[cart])

    const handleChange = (e)=>{
        const {name, value} = e.target
        setForm({
            ...form,
            buyer:{
                ...form.buyer,
                [name]:value
            }
        })
    }

    const {buyer: {email,name, lastName, phoneNumber}} = form;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formValidation([email, name, lastName, phoneNumber])){
            alert('faltan campos')
        }
        loadOrder({data:form});
        cartClear();
        alert('orden generada')
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-around">
            <h1>CheckOUT</h1>
            <input onChange={handleChange} type="text" name="email" placeholder='Correo electrónico'/>
            <input onChange={handleChange} type="text" name="name" placeholder='Nombre'/>
            <input onChange={handleChange} type="text" name="lastName" placeholder='Apellido'/>
            <input onChange={handleChange} type="number" name="phoneNumber" placeholder='Celular'/>
            <button type="submit">Comprar</button>
        </form>
        <h2>Total: $ {form.total}</h2>
    </div>

  )
}

export default OrderForm