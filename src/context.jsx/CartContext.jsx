import React, { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [order, setOrder] = useState([])


    /**
     * @param {*} selectedKota: kota_id
     * @param {*} menu: full kota_menu
     */
    const addedToCart = (selectedKota, menu) =>{
        const selected = menu.filter((item)=> selectedKota === item.id);
        const add = [...order, ...selected];
        setOrder(add);
        console.log('check cart');
        console.log(order)
    }
    
    const removeFromCart = (selectedKota, ordersList) =>{
        const cartOrder = ordersList.filter(item => selectedKota === item[0].id)
        const remove = order.indexOf(cartOrder[0][0])
        const newOrder = order
        newOrder.splice(remove, 1)
        console.log(newOrder)
        setOrder(newOrder)
    }

    const cartData = {
        order,

        addedToCart,
        removeFromCart
    }

    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;