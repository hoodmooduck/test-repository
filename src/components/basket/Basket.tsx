import { useAppSelector } from '../../store/hooks'
import basket from '../../assets/images/basket.svg'
import './Basket.scss'
import BasketList from './basketList/BasketList'

type BasketProps= {
    stateBasket: boolean,
}

function Basket({stateBasket}: BasketProps) {
    const basketProducts = useAppSelector((state) => state.slice.basketState)

    return (
        stateBasket && 
        <aside className="basket">
            <h2 className="basket-title">Оформить заказ</h2>
            {
            basketProducts.length !== 0 ? <BasketList /> : 
                <figure className="basket-empty">
                    <img src={basket} alt="" />
                    <figcaption className='basket-empty__text'>В корзине ничего нет</figcaption>
                </figure>
            }
        </aside>
    )
}

export default Basket