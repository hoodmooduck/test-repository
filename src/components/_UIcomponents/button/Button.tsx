import './Button.scss'

type ButtonProps = {
    onClick: () => void,
    stateButton: boolean
}

function Button({onClick, stateButton}: ButtonProps) {
    return(
        <button onClick={onClick} className={stateButton ? "cardProduct-button__inbasket" : "cardProduct-button"}>
            {stateButton ? "В корзине" : "Добавить в корзину"}
        </button>
    )
}

export default Button