import { DataType } from "../../../store/types"

type BasketCardProps = {
    props: DataType,
    deleteInBasket: () => void
}

function BasketCard({props, deleteInBasket} : BasketCardProps) {
    return (
        <aside className="basket-card">
            {props.id}
        </aside>
    )
}

export default BasketCard