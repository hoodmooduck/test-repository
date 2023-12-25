import { ChangeEvent, useState } from "react"
import Input from "../../_UIcomponents/input/Input";
import ButtonBasket from "../../_UIcomponents/buttonBasket/ButtonBAsket";
import { useAppDispatch } from "../../../store/hooks";
import { acceptOrder, changeProductBasket } from "../../../store/slice";


function BasketForm() {
    const [name, setName] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [nameEmpty, setNameEmpty] = useState<boolean>(false);
    const [telephoneEmpty, setTelephoneEmpty] = useState<boolean>(false);
    const [addressEmpty, setAddressEmpty] = useState<boolean>(false);

    const dispatch = useAppDispatch()

    const changeName = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }
    const changeTelephone = (e: ChangeEvent<HTMLInputElement>): void => {
        setTelephone(e.target.value)
    }
    const changeAddress = (e: ChangeEvent<HTMLInputElement>): void => {
        setAddress(e.target.value)
    }

    const checkEmpty = (): void => {
        if(name === ''){
            setNameEmpty(true)
        }
        else{
            setNameEmpty(false)
        }
        if(telephone === ''){
            setTelephoneEmpty(true)
        }
        else{
            setTelephoneEmpty(false)
        }
        if(address === ''){
            setAddressEmpty(true)
        }
        else{
            setAddressEmpty(false)
        }

    }

    const addOrder = (): void => {
        checkEmpty()
        if(name !== '' && telephone !== '' && address !== ''){
            dispatch(changeProductBasket([]))
            dispatch(acceptOrder(true))
            setTimeout(()=>{
                dispatch(acceptOrder(false))
            },3000)
        }

    }

    return (
        <form action="" className="basket-form">
            <div className="basket-composeInput">
                <label htmlFor="name" className="basket-form__label">Имя</label>
                <Input 
                    onChange={changeName}
                    value={name}
                    id="name"
                    type="text"
                    isEmpty={nameEmpty}
                />
                {nameEmpty && <p className="basket-from__error">Поле не должно быть пустым</p>}
            </div>
            <div className="basket-composeInput">
                <label htmlFor="telephone" className="basket-form__label">Телефон</label>
                <Input 
                    onChange={changeTelephone}
                    value={telephone}
                    id="telephone"
                    type="tel"
                    isEmpty={telephoneEmpty}
                />
                {telephoneEmpty && <p className="basket-from__error">Поле не должно быть пустым</p>}
            </div>
            <div className="basket-composeInput">
                <label htmlFor="address" className="basket-form__label">Полный адресс</label>
                <Input
                    onChange={changeAddress}
                    value={address} 
                    id="address"
                    type="text"
                    isEmpty={addressEmpty}
                />
                {addressEmpty && <p className="basket-from__error">Поле не должно быть пустым</p>}
            </div>
            <ButtonBasket onClick={addOrder}></ButtonBasket>
        </form>
    )
}

export default BasketForm