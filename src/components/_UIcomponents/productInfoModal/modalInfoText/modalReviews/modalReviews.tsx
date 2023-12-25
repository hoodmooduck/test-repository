import { ReviewsType } from "../../../../../store/types"

type ModalReviewsProps = {
    props?: ReviewsType[]
}

function ModalReviews({props} : ModalReviewsProps) {
    return(
        <div className="productInfoModal-reviews">
            {props?.map((el, idx)=>(
                <div key={idx} className="productInfoModal-reviews__item">
                    <figure className="productInfoModal-reviews__img">
                        <img src={el.avatar} alt={el.author} /> 
                </figure>
                <div className="productInfoModal-reviews__compose">
                    <div className="productInfoModal-reviews__name">{el.author}</div>
                    <div className="productInfoModal-reviews__rate">{el.rate}</div>
                    <div className="productInfoModal-reviews__description">{el.text}</div>
                </div>

       </div>
            ))}

        </div>
    )
}

export default ModalReviews