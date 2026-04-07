import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Package.css';

const Package =()=>{
    return(
        <div className="package-main">
            <Link to={'/Packages/DomesticPage'}>국내 패키지</Link>
            <Link to={'/Packages/OverseasPage'}>해외 패키지</Link>            
            <Outlet/>
            
        </div>
    )
}


export default Package