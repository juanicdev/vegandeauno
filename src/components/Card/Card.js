//Componente de Presentacion
import './Card.css'

//Functional Component
const CardItem = ({image, title, price}) => {
console.log (CardItem)
    return(
        <div className="card-item">
            <img src={`./${image}`} />
            <p>{title}</p>
            <span>${price} </span>
            <button>Detalle</button>
        </div>
    )
}

export default CardItem