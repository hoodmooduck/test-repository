
import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import './Sidebar.scss'


function Sidebar() {
    const { categori } = useParams()
    const sidebarLinks = useAppSelector((state) => state.slice.sidebarLinks).filter(el => el.parent_id === parseInt(categori ? categori : ''))
 
    return(
        <aside className="sidebar">
            <ul className='sidebar-list'>
                {sidebarLinks.map((el, idx) => (
                    <li className='sidebar-item' key={idx}><NavLink to={`/category/${categori}/subcategory/${el.id}`}>{el.name}</NavLink></li>
                ) )}
            </ul>
        </aside>
    )
}

export default Sidebar