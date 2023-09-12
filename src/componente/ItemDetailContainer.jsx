import { useEffect, useState } from "react";
import productosJson from "../productos.json"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const mockApi =(itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemId !== undefined){
                const filtrado = productosJson.find(
                    (item) => item.id == itemId
                );
                resolve(filtrado)
            } else {
                resolve(productosJson);
            }
        },
            1000);
    });
};

const ItemDetailContainer = ({}) => {
    const [products, setProducts] = useState([]);
    const { itemId } = useParams()

    useEffect(() => {
        mockApi(itemId)
        .then(data => setProducts(data));
    }, [itemId]);
console.log(products)
    return (
        <div>
            <ItemDetail product={products} />

        </div>
    )

}

export default ItemDetailContainer

