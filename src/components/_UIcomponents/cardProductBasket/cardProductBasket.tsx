import { DataType } from '../../../store/types'
import './cardProductBasket.scss'

type CardProductBasketProps = {
    props: DataType,
    deleteInBasket: () => void
}

function CardProductBasket({props, deleteInBasket}:CardProductBasketProps) {
    return(
        <article className="cardProductBasket">
            <figure className="cardProductBasket-img">
                <img src={props.img} alt={props.img} />
            </figure>
            <div className="cardProductBasket-info">
            <h3 className="cardProductBasket-title">{props.name}</h3>
            <p className="cardProductBasket-price">{props.price + ' ₽'}</p>
            <button onClick={deleteInBasket} className="cardProductBasket-delete">Убрать из корзины</button>
            </div>
        </article>
    )
}

export default CardProductBasket