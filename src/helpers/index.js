export const alreadyInCart = (cart,product) => cart.some((prod)=>prod.id === product.id);

export const setProductTogethers = (cart, product) =>{
    return cart.map( (prod) =>{
        if(prod.id === product.id){
            prod.quant = product.quant;
            prod.stock = product.stock;
        }
        return prod;
    })
}

