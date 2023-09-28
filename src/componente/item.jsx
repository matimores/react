import { Link } from "react-router-dom"
const Item = ({ product }) => {
    
    return (
        <div className="productos">
            <Link key={product.id} to={`/Item/${product.id}`} >
                <img className="img" src={product.image} />
                <h2 className="info">{product.title}</h2>
                <p className='price'><span>${product.price}</span></p>
            </Link>

        </div >

    )
}

export default Item







