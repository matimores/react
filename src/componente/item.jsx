import { Link } from "react-router-dom"
import {CartContext} from '../context/cartContext'
import { useContext } from "react";

const Item = ({ product }) => {
    const {removeCart} = useContext(CartContext);
    return (
        <div className="productos">
            <Link key={product.id} to={`/Item/${product.id}`} >
                <img className="img" src={product.imagen} />
                <h2 className="info">{product.name}</h2>
                <p className="description">{product.description}</p>
                <p className='price'><span>${product.price}</span></p>
               
            </Link>

        </div >

    )
}

export default Item







