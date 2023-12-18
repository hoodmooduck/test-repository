import { useAppSelector } from "../../../store/hooks"
import CardProductBasket from "../../_UIcomponents/cardProductBasket/cardProductBasket"



function BasketList() {
    const basketProducts = useAppSelector((state) => state.slice.basketState)

    const deleteInBasket = () => {

    }

    return (
        <div className="basket-list">
             <h3 className="basket-subtitle">В корзине:</h3>
            {basketProducts.map((el,idx)=>(
                <CardProductBasket key={idx} props={el} deleteInBasket={deleteInBasket} />
            ))}
        </div>
    )
}

export default BasketList