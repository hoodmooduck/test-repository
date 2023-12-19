import { useAppDispatch, useAppSelector } from "../../store/hooks"
import './ProductList.scss'
import CardProduct from "../_UIcomponents/cardProduct/CardProduct"
import { useParams } from "react-router"
import { addModalState, changeProductBasket } from '../../store/slice'
import { DataType } from "../../store/types"

type ProductListProps = {
    openModal: () => void
}

function ProductList({openModal} : ProductListProps) {
    const dispatch = useAppDispatch()
    const { subcategori } = useParams()
    const products = useAppSelector((state) => state.slice.products).filter(el => el.parent_id === parseInt(subcategori ? subcategori : ''))
    const productsBasket = useAppSelector((state) => state.slice.basketState);
    
    const selectItemProduct = (item: DataType): void =>{
        dispatch(addModalState(item))
        openModal()
    }
    const addProductToBasket = (item: DataType): void =>{
        dispatch(changeProductBasket([...productsBasket, item]))
    }

    const chekProdutInBasket = (item: DataType) => {
        let checkVarriable: boolean = false
        productsBasket.filter((el: DataType) => {
            if (el.id === item.id ) {
                checkVarriable = true
            }
        })
        return checkVarriable;
    }

    return(
        <main className="productList">
            {products.map(el => (
                <CardProduct inBasket={()=> chekProdutInBasket(el)} addProductToBasket={() => addProductToBasket(el)}  openInfo={() => selectItemProduct(el)} key={el.id} props={el} />
            ))}
        </main>
    )
}

export default ProductList