export const alreadyInCart = (cart,id) => cart.some((prod)=>prod.id === id);

export const formValidation = (fields) => fields.some((field)=>field ==="")



