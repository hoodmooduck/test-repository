import { ChangeEvent } from "react"
import './Input.scss'

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    id: string,
    type: string,
    isEmpty: boolean
}

function Input({onChange, value, id, type, isEmpty} : InputProps) {
    return (
        <input 
        id={id} 
        onChange={onChange}
        value={value} 
        className={isEmpty? "inputUI-error":"inputUI"} 
        type={type} 
        />
    )
}

export default Input