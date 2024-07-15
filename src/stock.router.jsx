import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarComponent from './layout/sidebar/Sidebar.component';
import DashboardPage from './apps/dashboard/dashboard.page';
import CustomersPage from './apps/customers/customers.page';

export const StockRouter = () => {

    const globalConfig = () => {
        const body = document.querySelector("body");
        const sidebar = body.querySelector(".sidebar");
        const modeToggle = body.querySelector(".mode-toggle");
        
        let getMode = localStorage.getItem("mode");
        if(getMode && getMode ==="dark"){
            body.classList.toggle("dark");
        }
        let getStatus = localStorage.getItem("status");
        if(getStatus && getStatus ==="close"){
            sidebar.classList.toggle("close");
        }
    }

    const sidebarToggle = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("close");
        if(sidebar.classList.contains("close")){
            localStorage.setItem("status", "close");
        }else{
            localStorage.setItem("status", "open");
        }
    }

    useEffect(() => {
        globalConfig();
    });
    

    return (
        <main className="mainContent">
            <SidebarComponent />
            <section className="dashboard">
                <div className="top">
                    <i id='sidebar-toggle' className="uil uil-bars sidebar-toggle" onClick={sidebarToggle}></i>
                    <div className="search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Search here..."/>
                    </div>
                    
                    {/* <img src="images/profile.jpg" alt=""/> */}
                </div>
                <div className="dash-content">
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="customers" element={<CustomersPage />} />
                    </Routes>
                </div>
            </section>
        </main>
    );
}