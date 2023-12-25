import { useAppSelector } from '../../store/hooks'
import basket from '../../assets/images/basket.svg'
import accept from '../../assets/images/accept.svg'
import './Basket.scss'
import BasketList from './basketList/BasketList'
import BasketForm from './basketForm/basketForm'

type BasketProps= {
    stateBasket: boolean,
}

function Basket({stateBasket}: BasketProps) {
    const basketProducts = useAppSelector((state) => state.slice.basketState)
    const order = useAppSelector((state) => state.slice.orderState)

    return (
        stateBasket && 
        <aside className="basket">
            <h2 className="basket-title">Оформить заказ</h2>
            
            {
            order ? 
            <figure className="basket-empty snus">
                <img src={accept} alt="" />
                <figcaption className='basket-empty__text'>Заказ успешно создан</figcaption>
            </figure>
            :
            basketProducts.length !== 0 ? <BasketList /> : 
                <figure className="basket-empty">
                    <img src={basket} alt="" />
                    <figcaption className='basket-empty__text'>В корзине ничего нет</figcaption>
                </figure>
            }
            {basketProducts.length !== 0 ? <BasketForm /> : null}
        </aside>
    )
}

export default Basket