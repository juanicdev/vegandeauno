//Componente de Presentacion
import React from "react"
import BasicButtons from "../Button.js/BasicButtons"



//Functional Component
const CardItem = ({image, title, price, stock, initial}) => {

    const onAdd = (count) => {
            
        console.log(count)
    
    }   

    return(
        <div className="card-item">
            <img src={`./${image}`} alt="asd" />
            <p>{title}</p>
            <span>${price} </span>
            <div>
            <BasicButtons stock={stock} onAdd={onAdd} initial={initial} />
            </div>
        </div>
    )
}

export default CardItem