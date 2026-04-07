import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Package.css';

const Package =()=>{
    return(
        <div className="package-main">
            <Link to={'/Packages/DomesticPage'} className="package-headerlink">국내 패키지</Link>
            <Link to={'/Packages/OverseasPage'} className="package-headerlink">해외 패키지</Link>            
            <Outlet/>
            
        </div>
    )
}


export default Package