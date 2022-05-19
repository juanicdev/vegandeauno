//Componente de Presentacion
import './Card.css'
import { useState } from 'react'
import { Button } from '@mui/material'



//Functional Component
const CardItem = ({image, title, price}) => {
const [count, setCount] = useState(1)
const stock = 5

 const addCount = () =>{
    setCount(count + 1)
}

const removeCount = () =>{
    setCount (count - 1)
}
console.log (CardItem)
    return(
        <div className="card-item">
            <img src={`./${image}`} alt="asd" />
            <p>{title}</p>
            <span>${price} </span>
            <div>
            <Button contained onClick={(addCount)} disabled ={( count === stock )} >+</Button>
                    <p> Cantidad: {count}</p>
                <Button contained onClick={(removeCount)} disabled={( count <= 0)} >-</Button>
            </div>
            <button>Detalle</button>
        </div>
    )
}

export default CardItem