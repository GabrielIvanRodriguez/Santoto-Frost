import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../spinner/Spinner'
import ItemDetail from '../itemDetail/ItemDetail';
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


  const { id } = useParams();
  console.log(id);  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);


  const allProducts = [
    {
        id: "000001",
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
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
        category: "Productos Elaborados",
        imgRoute: empanadasVerdura,
        name: "Empanadas de verdura",
        description: "Empanadas de carne elaboradas por Santoto Frost",
        weight: "800 g",
        amount: 6,
        price: 950,
        stock: 10
    },
    {
        id: "000009",
        category: "Pastas",
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
        category: "Pastas",
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
        category: "Pastas",
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
        category: "Pastas",
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
        category: "Pastas",
        imgRoute: sorrentinos,
        name: "Sorrentinos de calabaza",
        description: "Sorrentinos de calabaza elaborados por Santoto Frost",
        weight: "500 g",
        amount: 1,
        price: 1000,
        stock: 10
    }
]

  useEffect( () => {
    setTimeout( () => {
      const found = allProducts.find( (product) => product.id === id)
      setProduct(found);
      console.log(found);
      setLoading(false);
    }, 2000)
  },[id])



  return (
    <Fragment>
      {loading && <Spinner/>}

      {!loading  && (
        <ItemDetail product={product}/>
      )

      }
      
    </Fragment>
  )
}

export default ItemDetailContainer