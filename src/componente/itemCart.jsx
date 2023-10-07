import React from 'react';
import { CartContext } from '../context/cartContext'
import { useContext } from 'react';



const ItemCart = ({product}) => {
    const { removeItem} = useContext(CartContext);

    return (
        <div style={{display:'block', justifyContent:'center', marginBottom:'10vh'}} className='itemCart' >
            <img className='imgCart' src={product.imagen} />
            <p className='titleCart'>{product.name}</p>
            <p style={{color:'red'}} className='infoCart'>Cantidad: {product.quantity}</p>
            <p className='infoCart'>Precio unidad: $ {product.price}</p>
            <p className='infoCart'>Subtotal: $ {product.quantity * product.price}</p>
            <button onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
    )

}

export default ItemCart;