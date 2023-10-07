import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext";


const Checkout = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const {cartList, totalPrice} = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    

    function crearOrden() {
        const db = getFirestore();
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
            items: cartList.map(product => ({id: product.id, description: product.description, quantity: product.quantity, price: product.price})),
            total: totalPrice()
         
        };

        const ordenesRef = collection(db, 'datos');
        addDoc(ordenesRef, order).then(result => {console.log(result.id)
             setOrderId(result.id) })


}
if(orderId){
    return <h1 style={{fontSize:'25px', marginLeft:'25%', backgroundColor:'white', width:'50vw',padding:'10px'}}>Gracias por tu compra,tu id es: {orderId}</h1>
        
    }


    return (
        <form className="formCheckout" onSubmit={(evento) => evento.preventDefault()}>
            <label htmlFor="">Name<input className="input" type="text" value={name} onChange={(evento) => setName(evento.target.value)} /></label>
            <label htmlFor="">Email<input className="input" type="text" value={email} onChange={(evento) => setEmail(evento.target.value)} /></label>
            <label htmlFor="">Phone<input className="input" type="text" value={phone} onChange={(evento) => setPhone(evento.target.value)} /></label>

            <button className="buttonCheckout" onClick={() => crearOrden()}>Terminar Compra</button>
        </form>


    )
}
export default Checkout