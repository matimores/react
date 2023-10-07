
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {

 const [data, setData] = useState([]);
 const {detalleId} = useParams();

 useEffect(() => {
    const querydb = getFirestore();
    const Doc = doc(querydb, "Productos", detalleId);
   getDoc(Doc).then(doc => setData({id: doc.id, ...doc.data()}))


 }, [detalleId]);


    return (
        <div>
            <ItemDetail product={data} />
        </div>
    )
}
 
export default ItemDetailContainer














