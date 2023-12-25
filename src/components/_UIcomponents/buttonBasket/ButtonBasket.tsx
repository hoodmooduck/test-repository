import './ButtonBasket.scss'

type ButtonProps = {
    onClick: () => void,
}

function ButtonBasket({onClick}: ButtonProps) {
    return(
        <button type='button' onClick={onClick} className='basket-button'>
            Заказать
        </button>
    )
}

export default ButtonBasket