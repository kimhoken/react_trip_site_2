import React, { useState } from "react";
import TipItem from "../../components/TipItem";

export default function TravelTips(){

    const tips=['여권','보험 가입','환전','보조배터리']

    const [checked,setChecked]=useState([])

    const toggle=(index)=>{
        setChecked((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index):[...prev,index])
    }

    return(
        <div>
            <h2>체크리스트</h2>
            <ul>
                {
                    tips.map((tip,i)=>(
                        <TipItem tip={tip} checked={checked.includes(i)} onToggle={()=>toggle(i)}/>
                    ))
                }
            </ul>

            <h2>💡 꿀팁</h2>
            <p>✔ eSIM 미리 준비</p>
            <p>✔ 공항 2시간 전 도착</p>
        </div>
    )
}