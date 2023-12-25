import { DataType } from "../../../../store/types"
import ModalCharacteristics from "./modalCharacteristics/modalCharacteristics"
import ModalDescription from "./modalDecription/modalDescription"
import ModalReviews from "./modalReviews/modalReviews"

type ModalInfoTextProps = {
    id: number,
    dataInfo: DataType | null,
}

function ModalInfoText({ id, dataInfo } : ModalInfoTextProps) {

    const checkTabActive = (id: number) => {
        if(id === 0){
            return <ModalDescription/>
        }
        else if(id === 1){
            return <ModalCharacteristics props={dataInfo?.props} />
 
        }
        else if(id === 2){
            return <ModalReviews props={dataInfo?.reviews} />
        }
    }

    return (
        <div className="productInfoModal-info">
            {checkTabActive(id)}
        </div>
    )
}

export default ModalInfoText