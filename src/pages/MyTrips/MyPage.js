import React from "react";
import { Link } from "react-router-dom";

export default function MyPage(){
    return(
        <div>
            <nav>
                <Link to="/tips" style={{margin:"10px"}}>여행 팁</Link>
            </nav>      
        </div>
    )
}