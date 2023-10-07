import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newCart = { ...item, quantity }
        if (!isInCart(item.id)) {
            setCartList([...cartList, newCart])
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
            setCartList(newProduct)
        }
    }

    const clear = () => { setCartList([]) };
    const isInCart = (producId) => { return cartList.some((produc) => produc.id === producId) };

    const removeItem = (id) => {
      setCartList(cartList.filter(product => product.id !== id));
    }

    const totalProducts = () => {
     return    cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }
    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    
    return (

        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            isInCart,
            removeItem,
            totalPrice,
            totalProducts,


        }} >{children}
        </ CartContext.Provider>


    )

}
