import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { changeProductBasket } from "../../../store/slice"
import CardProductBasket from "../../_UIcomponents/cardProductBasket/cardProductBasket"



function BasketList() {
    const basketProducts = useAppSelector((state) => state.slice.basketState)
    const dispatch = useAppDispatch()

    const deleteInBasket = (id: number) => {
        dispatch(changeProductBasket([...basketProducts].filter((el)=> el.id !== id)))
    }

    return (
        <div className="basket-list">
             <h3 className="basket-subtitle">В корзине:</h3>
            {basketProducts.map((el,idx)=>(
                <CardProductBasket key={idx} props={el} deleteInBasket={()=>deleteInBasket(el.id)} />
            ))}
        </div>
    )
}

export default BasketList