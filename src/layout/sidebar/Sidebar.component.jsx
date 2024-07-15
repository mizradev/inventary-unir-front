
import {  NavLink, useLocation } from 'react-router-dom';



const SidebarComponent = () => {
    const location = useLocation();
    
    const modeToggleTheme = () =>{
        const body = document.querySelector('body');
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        }else{
            localStorage.setItem("mode", "light");
        }
    }

    return (
        <aside className="sidebar">
            <div className="logo-name">
                <div className="logo-image">
                <img src="https://www.clipartmax.com/png/middle/347-3475012_inventory-png-photos-inventory-icon-free.png" alt=""/>
                </div>
                <span className="logo_name">Stockify</span>
            </div>
            <div className="menu-items">
                <ul className="sidebar-links">
                    <li>
                    <NavLink className={location.pathname === '/' ? 'active' : ''} to={'/'}>
                        <i className="uil uil-estate"></i>
                        <span className="link-name">Dashboard</span>
                    </NavLink>
                    </li>
                    <li >
                    <NavLink className={location.pathname === '/customers' ? 'active' : ''} to={'/customers'}>
                        <i className="uil uil-files-landscapes"></i>
                        <span className="link-name">Customers</span>
                    </NavLink>
                    </li>
                    <li><a href="#">
                        <i className="uil uil-chart"></i>
                        <span className="link-name">Products</span>
                    </a></li>
                    <li><a href="#">
                        <i className="uil uil-thumbs-up"></i>
                        <span className="link-name">Invoices</span>
                    </a></li>
                    {/* <li><a href="#">
                        <i className="uil uil-comments"></i>
                        <span className="link-name">Comment</span>
                    </a></li>
                    <li><a href="#">
                        <i className="uil uil-share"></i>
                        <span className="link-name">Share</span>
                    </a></li> */}
                </ul>
                
                <ul className="logout-mode">
                    <li><a href="#">
                        <i className="uil uil-signout"></i>
                        <span className="link-name">Logout</span>
                    </a></li>
                    <li className="mode">
                        <a href="#">
                            <i className="uil uil-moon"></i>
                        <span className="link-name">Dark Mode</span>
                    </a>
                    <div className="mode-toggle" onClick={modeToggleTheme}>
                    <span className="switch"></span>
                    </div>
                </li>
                </ul>
            </div>
        </aside>
    );

}

export default SidebarComponent;