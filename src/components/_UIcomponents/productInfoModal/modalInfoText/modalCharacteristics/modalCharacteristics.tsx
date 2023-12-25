import { DataTypeProps } from "../../../../../store/types"

type ModalCharacteristicsProps = {
    props: DataTypeProps | undefined
}

function ModalCharacteristics({ props } : ModalCharacteristicsProps) {
    return(
        <div className="productInfoModal-characteristics">
            <div className="productInfoModal-characteristics__item">
                    <span className="productInfoModal-characteristics__text">
                        <span>{`${props?.width.caption} `}</span> 
                        <span className="text-gray">{`${props?.width.value}${props?.width.measure}`}</span> 
                    </span>
            </div>
            <div className="productInfoModal-characteristics__item">
                    <span className="productInfoModal-characteristics__text">
                        <span>{`${props?.height.caption} `}</span> 
                        <span className="text-gray">
                            {`${props?.height.value}${props?.height.measure}`}
                        </span>
                    </span>
            </div>
            <div className="productInfoModal-characteristics__item">
                    <span className="productInfoModal-characteristics__text">
                        <span>{`${props?.length.caption} `}</span>
                        <span className="text-gray">{`${props?.length.value}${props?.length.measure}`}</span> 
                    </span>
            </div>
        </div>
    )
}

export default ModalCharacteristics