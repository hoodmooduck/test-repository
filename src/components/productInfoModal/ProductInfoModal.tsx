import './ProductInfoModal.scss'
import Close from '../../assets/images/close.svg'
import ModalInfoList from './modalInfoLists/ModalInfoList';
import { useAppSelector } from '../../store/hooks';

type ModalProps = {
    closeModal: () => void, 
    stateModal: boolean
}

function ProductInfoModal({closeModal, stateModal} : ModalProps) {
    const product = useAppSelector((state) => state.slice.modalState)

    return (
        stateModal &&
        <section className="productInfoModal">
            <div className="productInfoModal-compose">
                <figure className="productInfoModal-closeBtn">
                    <img onClick={closeModal} src={Close} alt="" />
                </figure>
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