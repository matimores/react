import { Link } from "react-router-dom"
import ItemCount from "./itemCount"
import { CartContext } from '../context/cartContext'
import { useState, useContext } from "react"



const ItemDetail = ({ product }) => {

    const [clickCount, setClickCount] = useState();
    const { addItem } = useContext(CartContext);
    
    const onAdd = (valor) => {
        setClickCount(valor);

        if (valor !== 0) {
            addItem(product, valor);

        }
    }
    return (
        <div className="detail">
            <img className="imgDetail" src={product.imagen} />
            <h2 className="infoDetail">{product.title}</h2>
            <p className='detalleDetail'>{product.description}</p>
            {clickCount ?
                (<Link to={'/cart'}>Finalizar</Link>)
                :
                (<ItemCount stock={product.stock} onAdd={onAdd} />
                )}
        </div>
    )
}
export default ItemDetail