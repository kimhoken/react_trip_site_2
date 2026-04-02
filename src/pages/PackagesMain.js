import React from "react";
import "./PackagesMain.css";
import { PackageList } from "../Packages/PackageList";

const PackagesMain=()=>{

    const cardchoice = [1,14,101]
    
    const c_choice = PackageList.filter((pack)=>
        cardchoice.includes(pack.id)
    )
    
    return(
        
        <div className="Mainpack-list">
            {c_choice.map((pack) => (
                <div className="Mainpack-card" key={pack.id}>
                <img src={pack.image} className="Mainpack-img"/>
                

                    <div className="Mainpack-txt">
                        <div className="Mainpack-title">
                            {pack.title}
                        </div>
                        <div className="Mainpack-price">
                            {pack.price}
                        </div>
                       
                    </div>

                    <button className="Mainpack-button" 
                            onClick={() => window.location.href = pack.link}>
                                {pack.buttonText}
                    </button>

                
                </div>


            ))}
            
            

        </div>
    )


}

export default PackagesMain

