import { useState } from 'react'
import { DataType } from '../../../store/types'
import Button from '../button/Button'
import './CardProduct.scss'
import ImageLoader from '../imageLoader/ImageLoader'

interface propsProductCard {
    props: DataType,
    inBasket: () => boolean,
    openInfo: () => void,
    addProductToBasket: () => void,
}

function CardProduct({props, openInfo, addProductToBasket, inBasket} : propsProductCard) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const imageLoading = () => {
        setIsImageLoaded(true);
    };

    const addToBasket = () => {
        if(inBasket()) return
        addProductToBasket()
    }

    return(
        <article className="cardProduct">
            <figure onClick={openInfo} className="cardProduct-img">
            {isImageLoaded ? null : <ImageLoader />}        
            <img src={props.img} alt={props.name} onLoad={imageLoading}/>        
            </figure>
            <div className="cardProduct-info">
                <h2 onClick={openInfo} className="cardProduct-title">{props.name}</h2>
                <p className="cardProduct-price">{props.price+' ₽'}</p>
                <Button onClick={addToBasket} stateButton={inBasket()}></Button>
            </div>
        </article>
    )
}

export default CardProduct