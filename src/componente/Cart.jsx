import React from 'react';
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom"
import ItemCart from './itemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Cart = () => {
    const { cartList, totalPrice } = useContext(CartContext);

    if (cartList.length === 0) {
        return (
            <div style={{ width: '30vw', backgroundColor: 'white', fontSize: '25px', textAlign: 'center', marginLeft: '35%', marginTop: '50px', borderRadius: '10px' }}>
                <p>No hay elementos en el carrito</p>
                <Link>Hacer Compras</Link>

            </div>

        )
    }

    return (


        <div className='divCart'>
            {
                cartList.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p >
                TOTAL: ${totalPrice()}
            </p>
            <Link to={'/Checkout'} ><button  style={{ backgroundColor: 'red' }}>Terminar Compra</button> </Link>
            
        </div>







    )
};


export default Cart