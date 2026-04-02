import React from "react";
import "./Mainpage.css";
import AdSlider from "./AdSlider";
import PackagesMain from "./PackagesMain";
import Mainetc from "./Mainetc";

const Mainpage = () =>{


    return(
        <div>
            <div className="banner-section">
                <img src="/images/main.png" className="main-banner"/>
                
                <div className="banner-text">
                    <h1>여행, 지금 바로 떠나세요</h1>
                    <p>전 세계 여행 상품을 한눈에 확인하세요</p>
                </div>

            </div>

            <div>
                <PackagesMain/>               
                
            </div>

            <div>
                <Mainetc/>
            </div>

            
   </div>
  

    )
}

export default Mainpage
