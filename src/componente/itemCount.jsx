import React, { useState } from "react";


function ItemCount({stock}) {
    const [count, setCount] = useState(0)


    function Incrementar() {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    function Decrementar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className="count">
            <button className="button" disabled={count <= 1} onClick={Decrementar}>-</button>
            <p className="button">{count}</p>
            <button className="button" disabled={count >= stock} onClick={Incrementar}>+</button>

            <button disabled={stock <= 0} onClick={() =>  onAdd(count)} className="add">AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount;












