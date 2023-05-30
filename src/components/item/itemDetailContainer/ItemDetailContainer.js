import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import arosCebolla from "../../../assets/img/arosCebolla.jpg"
import bastonesMuzza from "../../../assets/img/bastonesMuzza.jpg"
import bastonesPollo from "../../../assets/img/bastonesPollo.jpg"
import ñoquis from "../../../assets/img/ñoquis.jpg"
import ravioles from "../../../assets/img/ravioles.jpg"
import croquetasEspinaca from "../../../assets/img/croquetasEspinaca.jpg"
import croquetasJyq from "../../../assets/img/croquetasJyq.jpg"
import empanadasCarne from "../../../assets/img/empanadasCarne.jpg"
import empanadasJyq from "../../../assets/img/empanadasJyq.jpg"
import empanadasVerdura from "../../../assets/img/empanadasVerdura.jpg"
import sorrentinos from "../../../assets/img/sorrentinos.jpg"

const ItemDetailContainer = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const processedProducts = [
    {
        id: "000001",
        category:"Productos Elaborados",
        imgRoute: arosCebolla,
        name: "Aros de cebolla",
        description: "Aros de cebolla elaborados por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 1410,
        stock: 10
    },
    {
        id: "000002",
        category:"Productos Elaborados",
        imgRoute: bastonesMuzza,
        name: "Bastones de muzzarella",
        description: "Bastones de muzarrella elaborados por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 1130,
        stock: 10
    },
    {
        id: "000003",
        category:"Productos Elaborados",
        imgRoute: bastonesPollo,
        name: "Bastones de pollo capresse",
        description: "Bastones de pollo elaborados por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 1100,
        stock: 10
    },
    {
        id: "000004",
        category:"Productos Elaborados",
        imgRoute: croquetasEspinaca,
        name: "Croquetas de espinaca y queso",
        description: "Croquetas de espinaca y queso elaboradas por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 860,
        stock: 10
    },
    {
        id: "000005",
        category:"Productos Elaborados",
        imgRoute: croquetasJyq,
        name: "Croquetas de papa, jamón y queso",
        description: "Croquetas de papa, jamón y queso elaborados por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 940,
        stock: 10
    },
    {
        id: "000006",
        category:"Productos Elaborados",
        imgRoute: empanadasCarne,
        name: "Empanadas de carne",
        description: "Empanadas de carne elaboradas por Santoto Frost",
        weight: "800 g",
        amount: 6,
        price: 950,
        stock: 10
    },
    {
        id: "000007",
        category:"Productos Elaborados",
        imgRoute: empanadasJyq,
        name: "Empanadas de jamón y queso",
        description: "Empanadas de jamón y queso elaboradas por Santoto Frost",
        weight: "700 g",
        amount: 6,
        price: 950,
        stock: 10
    },
    {
        id: "000008",
        category:"Productos Elaborados",
        imgRoute: empanadasVerdura,
        name: "Empanadas de verdura",
        description: "Empanadas de carne elaboradas por Santoto Frost",
        weight: "800 g",
        amount: 6,
        price: 950,
        stock: 10
    }
]

    const pastaProducts = [
        {
            id: "000009",
            category:"Pastas",
            imgRoute: ravioles,
            name: "Ravioles de ricota y maíz",
            description: "Ravioles de ricota y maíz elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 900,
            stock: 10
        },
        {
            id: "000010",
            category:"Pastas",
            imgRoute: ravioles,
            name: "Ravioles de jamón y queso",
            description: "Ravioles de jamón y queso elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 900,
            stock: 10
        },
        {
            id: "000011",
            category:"Pastas",
            imgRoute: ñoquis,
            name: "Ñoquis de papa",
            description: "Ñoquis de papa elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 1100,
            stock: 10
        },
        {
            id: "000012",
            category:"Pastas",
            imgRoute: sorrentinos,
            name: "Sorrentinos de jamón y queso",
            description: "Sorrentinos de jamón y ques elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 1300,
            stock: 10
        },
        {
            id: "000013",
            category:"Pastas",
            imgRoute: sorrentinos,
            name: "Sorrentinos de calabaza",
            description: "Sorrentinos de calabaza elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 1000,
            stock: 10
        }
    ]

  const allProducts = [...processedProducts,...pastaProducts];


  useEffect( () => {
    setTimeout( () => {
      const found = allProducts.find( (product) => product.id === id)
      setProduct(found);
      console.log(found);
      setLoading(false);
    }, 2000)
  },[id])

  const addToCart = (product) => {
    setCart(product);
    console.log(cart);
  }

  return (
    <Fragment>
      {loading && <h1>Cargando...</h1>}

      {!loading  && (
        <div>
        <img src={product.imgRoute} alt="comida"/>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Peso: {product.weight}</p>
        <p>Unidades: {product.amount}</p>
        <p>Cantidades disponibles: {product.stock}</p>
        <button onClick={()=>addToCart(product)}>Agregar al carrito</button>
        <button onClick={() => navigate(-1)} Volver></button>
      </div>
      )

      }
      
    </Fragment>
  )
}

export default ItemDetailContainer