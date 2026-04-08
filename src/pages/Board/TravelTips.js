import React, { useState } from "react";

export default function TravelTips(){

    const tips={필수품: ['여권','지갑','유심/와이파이','신분증','환전'],
                출력물: ['여권사본','비자','항공티켓','여행자보험'],
                상비약: ['소화제','진통제','소염제'],
                의류: ['하의','잠옷','양말','속옷'],
                전자기기: ['충전기','보조배터리'],
                미용: ['스킨/로션','선크림','치약/칫솔'],
                기타: ['우산','물티슈','지퍼백','샤워필터']}

    const [checked,setChecked]=useState([])

    const toggle=(key)=>{
        setChecked((prev)=>prev.includes(key) ? prev.filter((i)=>i !== key):[...prev,key])
    }

    return(
        <div>
            <h2>체크리스트</h2>
            <div>
                {
                    Object.entries(tips).map(([a,b])=>(
                        <div className="top" key={a}>
                            <h3>{a}</h3>
                            {b.map((c,i)=>{
                                const list=a+c
                                return(
                                    <label key={list} className="ready">
                                        <input type="checkbox" checked={checked.includes(list)} onChange={() => toggle(list)}/>
                                        {c}
                                    </label>
                                )
                            })}
                        </div>
                    ))
                }
            </div>

            
        </div>
    )
}