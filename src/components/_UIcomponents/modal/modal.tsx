import { ReactNode } from "react"
import Close from '../../../assets/images/close.svg'
import './modal.scss'

type ModalProps = {
    modalState: boolean
    closeModal: () => void,
    closeBasket: () => void,
    children: ReactNode
}

function Modal({modalState, children, closeModal,closeBasket}: ModalProps) {

    const closeCompose = () => {
        closeModal()
        closeBasket()
    }

    return (
        modalState &&
        <section className="modal">
            <figure className="modal-closeBtn">
                <img onClick={closeCompose} src={Close} alt="close" />
            </figure>
            <div className="modal-compose">
                {children}
            </div>
        </section>
    )
}

export default Modal