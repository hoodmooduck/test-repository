import './ProductInfoModal.scss'
import ModalInfoList from './modalInfoLists/ModalInfoList';
import { useAppSelector } from '../../../store/hooks';

type ModalProps = {
    stateModal: boolean
}

function ProductInfoModal({ stateModal} : ModalProps) {
    const product = useAppSelector((state) => state.slice.modalState)

    return (
        stateModal &&
        <section className="productInfoModal">
            <div className="productInfoModal-compose">

                <h2 className="productInfoModal-title">Информация</h2>
                <article className="productInfoModal-column">
                    <figure className="productInfoModal-img">
                        <img src={product?.img} alt="" />
                    </figure>
                    <div className="productInfoModal-text">
                        <p className="productInfoModal-name">{product?.name}</p>
                        <p className="productInfoModal-price">{product?.price +' ₽'}</p>
                    </div>
                    <ModalInfoList productInfo={product}/>
                </article>
            </div>
        </section>
    ) 
}

export default ProductInfoModal;