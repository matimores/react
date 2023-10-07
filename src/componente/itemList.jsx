import Item from "./item";

function ItemList({ products }) {
    return (
        <div className="item-list">
             {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
               
        </div>
    )
}

export default ItemList