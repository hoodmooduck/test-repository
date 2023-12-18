import { useAppSelector } from '../../store/hooks'
import closeIcon from '../../assets/images/close.svg'
import basket from '../../assets/images/basket.svg'
import './Basket.scss'
import BasketList from './basketList/BasketList'

type BasketProps= {
    stateBasket: boolean,
    closeBasket: () => void
}

function Basket({stateBasket,closeBasket}: BasketProps) {
    const basketProducts = useAppSelector((state) => state.slice.basketState)

    return (
        stateBasket && 
        <aside className="basket">
            <figure onClick={closeBasket} className="basket-close">
                <img src={closeIcon} alt="close" />
            </figure>
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