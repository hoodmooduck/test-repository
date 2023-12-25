export interface InitialState {
    headerLinks: DataType[],
    sidebarLinks: DataType[],
    products: DataType[],
    loading: LoadingType
    modalState: ModalStateType,
    basketState: BasketStateType
    orderState: boolean
}

type LoadingType = boolean
type ModalStateType = DataType | null
type BasketStateType = DataType[]

export type DataType = {
    id: number,
    parent_id: number,
    name: string,
    img: string,
    price?: number,
    props?: DataTypeProps,
    reviews?: ReviewsType[],
}

export type DataTypeProps = {
    width: DataTypePropsElements,
    height: DataTypePropsElements,
    length: DataTypePropsElements,
}

export type DataTypePropsElements = {
    caption: string,
    value: number,
    measure: string
}

export type ReviewsType = {
    author: string,
    avatar: string,
    rate: number,
    text: string
}
