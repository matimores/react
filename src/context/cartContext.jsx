import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ Children }) {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newCart = { ...item, quantity }
        if (!isInCart(item.id)) {
            setCartList([...cart, newCart])
        } else {
            const newProduct = cartList.map(prod => {
                if (prod.id === item.id) {
                    const newPorducts = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newPorducts
                } else {
                    return prod
                }

            })
            setCart(newProduct)
        }
    }

    const clear = () => { setCartList([]) };
    const isInCart = (producId) => { return cartList.some((produc) => produc.id === producId) };
    const removeItem = (producId) => {
        const remove = cartList.filter((item) => item.id === producId)
        setCartList(remove)
    };

   
    return (

        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            isInCart,
            removeItem,
            
        }} >{Children}
        </ CartContext.Provider>


    )
   
}
 