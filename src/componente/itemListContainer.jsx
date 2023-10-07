
import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import {collection , getDocs, getFirestore , query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams()
 let q
    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, "Productos")
        if(id !== undefined){
              q = query(productosRef, where("category" , "==" , id));
        } else {
            q = productosRef
        }
       

        getDocs(q).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                })
            );
        });
    }, [id]);

     


    return (
        <div  className="cartProductos">
          <ItemList key={products.id}  products={products} />
         </div>
    )
   
}
 
export default ItemListContainer

