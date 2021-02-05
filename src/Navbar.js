import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
    <>
        <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <ExpandMoreIcon onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <CloseIcon color='action'/>
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
    )
}

export default Navbar;