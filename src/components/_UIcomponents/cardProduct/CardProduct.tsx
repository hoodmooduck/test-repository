import { DataType } from '../../../store/types'
import './CardProduct.scss'

interface propsProductCard {
    props: DataType,
    onClick: () => void
}

function CardProduct({props, onClick} : propsProductCard) {
    return(
        <article onClick={onClick} className="cardProduct">
            <figure className="cardProduct-img">
                <img src={props.img} alt={props.name} />
            </figure>
            <div className="cardProduct-info">
                <h2 className="cardProduct-title">{props.name}</h2>
                <p className="cardProduct-price">{props.price+' ₽'}</p>
            </div>
        </article>
    )
}

export default CardProduct