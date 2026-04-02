import React from "react";
import { Link, Outlet } from "react-router-dom";

const Package =()=>{
    return(
        <div>
            <Link to={'/Packages/DomesticPage'}>DomesticPage</Link>
            <Link to={'/Packages/OverseasPage'}>OverseasPage</Link>
            
            <Outlet/>
            
        </div>
    )
}


export default Package