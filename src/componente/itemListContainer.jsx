
import React, { useEffect, useState } from "react";
import productosJson from "../productos.json"
import { useParams } from "react-router-dom";
import ItemList from "./itemList";



function mockApi(category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category !== undefined) {
                const filtrado = productosJson.filter(
                    (item) => item.category === category
                );

                resolve(filtrado)
            } else {
                resolve(productosJson);
            }
        },
            1000);
    })
}

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        mockApi(category).then(data => setProducts(data));
    }, [category]);

    return (
        <div className="cartProductos">
           <ItemList products={products} />
           
        </div>
    )
   
}
 
export default ItemListContainer

