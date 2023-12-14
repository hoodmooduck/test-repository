import { useState } from "react";
import { list } from "../index";
import { DataType } from "../../../store/types";

type ModalInfoListProps = {
    productInfo: DataType | null
}

function ModalInfoList({productInfo} : ModalInfoListProps) {

    const [activeSlide, setActiveSlide] = useState<number>(0);

    const setSlide = (id: number) : void => {
        setActiveSlide(id)
    }
    console.log(productInfo);
    
    return(
        <div className="productInfoModal-list">
            <ul className="productInfoModal-tabs">
                {list.map((el,idx) => (
                    <li 
                    key={idx}
                    className={el.id === activeSlide ? "productInfoModal-item__active" : "productInfoModal-item"}
                    onClick={() => setSlide(el.id)}
                    >
                        {el.name}
                    </li>
                ))}
               
            </ul>
        </div>

    ) 
}

export default ModalInfoList