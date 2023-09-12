import { Link } from "react-router-dom"
import ItemCount from "./itemCount"


const ItemDetail = ({product}) => {
    return (

        <div className="detail">
            <Link to={`/item/${product.id}`} ></Link>
            <img className="imgDetail" src={product.image} />
            <h2 className="infoDetail">{product.title}</h2>
            <p className='detalleDetail'>{product.description}</p>
           <ItemCount />
        </div>



    )


}
export default ItemDetail