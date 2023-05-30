import React, { Fragment } from 'react'
import Item from "../../../components/item/Item"
import arosCebolla from "./../../../assets/img/arosCebolla.jpg"
import bastonesMuzza from "./../../../assets/img/bastonesMuzza.jpg"
import bastonesPollo from "./../../../assets/img/bastonesPollo.jpg"
import ñoquis from "./../../../assets/img/ñoquis.jpg"
import ravioles from "./../../../assets/img/ravioles.jpg"
import croquetasEspinaca from "./../../../assets/img/croquetasEspinaca.jpg"
import croquetasJyq from "./../../../assets/img/croquetasJyq.jpg"
import empanadasCarne from "./../../../assets/img/empanadasCarne.jpg"
import empanadasJyq from "./../../../assets/img/empanadasJyq.jpg"
import empanadasVerdura from "./../../../assets/img/empanadasVerdura.jpg"
import sorrentinos from "./../../../assets/img/sorrentinos.jpg"

const ItemListContainer = () => {

    const processedProducts = [
        {
            id: "000001",
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
            imgRoute: sorrentinos,
            name: "Sorrentinos de calabaza",
            description: "Sorrentinos de calabaza elaborados por Santoto Frost",
            weight: "500 g",
            amount: 1,
            price: 1000,
            stock: 10
        }
    ]

    return (
        <Fragment>
            <h3>Productos elaborados</h3>
            <hr />
            <div className="d-flex flex-wrap">
                {
                    processedProducts.map((product) => <Item key={product.id} imgRoute={product.imgRoute} name={product.name} description={product.description} weight={product.weight} amount={product.amount} price={product.price} stock={product.stock} />)
                }
            </div>
            <h3>Pastas</h3>
            <hr />
            <div className="d-flex flex-wrap">
                {
                    pastaProducts.map((product) => <Item key={product.id} id={product.id} imgRoute={product.imgRoute} name={product.name} description={product.description} weight={product.weight} amount={product.amount} price={product.price} stock={product.stock} />)
                }
            </div>
        </Fragment>
    )
}

export default ItemListContainer