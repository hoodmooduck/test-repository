import { useAppDispatch, useAppSelector } from "../../store/hooks"
import './ProductList.scss'
import CardProduct from "../_UIcomponents/cardProduct/CardProduct"
import { useParams } from "react-router"
import { addModalState, addProductBasket } from '../../store/slice'
import { DataType } from "../../store/types"

type ProductListProps = {
    openModal: () => void
}

function ProductList({openModal} : ProductListProps) {
    const dispatch = useAppDispatch()

    const { subcategori } = useParams()
    const products = useAppSelector((state) => state.slice.products).filter(el => el.parent_id === parseInt(subcategori ? subcategori : ''))
    
    const selectItemProduct = (item: DataType): void =>{
        dispatch(addModalState(item))
        openModal()
    }
    const addProductToBasket = (item: DataType): void =>{
        dispatch(addProductBasket(item))
    }

    return(
        <main className="productList">
            {products.map(el => (
                <CardProduct addProductToBasket={() => addProductToBasket(el)}  openInfo={() => selectItemProduct(el)} key={el.id} props={el} />
            ))}
        </main>
    )
}

export default ProductList