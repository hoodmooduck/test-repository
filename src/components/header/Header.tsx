import Logo from '../../assets/images/logo.png'
import Basket from '../../assets/images/basket.svg'
import {NavLink} from 'react-router-dom'
import './Header.scss'
import { useAppSelector } from '../../store/hooks'

type HeaderProps = {
    openBasket: () => void
}

function Header({openBasket}: HeaderProps) {
    const headerLinks = useAppSelector((state) => state.slice.headerLinks)
    const countProductBasket = useAppSelector((state) => state.slice.basketState).length
    return(
        <header className="header">
            <figure className="header-logo">
                <img src={Logo} alt="logotype" />
            </figure>
            <nav className="header-nav">
                {headerLinks.map((el, idx)=> (
                    <NavLink key={idx} className={({isActive}) => isActive ? 'header-link__active':'header-link'} to={`/category/${el.id}`}>{el.name}</NavLink>
                ))}
            </nav>
            <figure onClick={openBasket} className="header-basket">
                <img src={Basket} alt="basket" />
                <figcaption className='header-basket__count'>{countProductBasket}</figcaption>
            </figure>
        </header>
    )
}

export default Header