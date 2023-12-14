import Header from '../header/Header.tsx'
import Sidebar from '../sidebar/Sidebar.tsx'
import { getCatigories } from '../../store/api.ts'
import { useAppDispatch } from '../../store/hooks.ts'
import { useEffect, useState } from 'react'
import ProductList from '../productsList/ProductList.tsx'
import ProductInfoModal from '../productInfoModal/ProductInfoModal.tsx'
import { useNavigate } from "react-router-dom"


function Compose() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [modal, setModal] = useState<boolean>(false)

    useEffect(()=>{
        const helper = getCatigories()
        helper(dispatch)
        // navigate('/category/14')
    }, [])

    const openModal = (): void => {
        setModal(true)
    }

    const closeModal = (): void => {
        setModal(false)
    }


    return(
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <ProductList openModal={openModal}></ProductList>
            <ProductInfoModal closeModal={closeModal} stateModal={modal}></ProductInfoModal>
        </>

    )
}

export default Compose