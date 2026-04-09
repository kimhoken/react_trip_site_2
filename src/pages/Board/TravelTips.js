import React, { useState } from "react";
import './TravelTips.css';
import { useNavigate } from "react-router-dom";
import useWebStore from "../../Store/useWebStore";


export default function TravelTips(){

    const tips={필수품: ['여권','지갑','유심/와이파이','신분증','환전'],
                출력물: ['여권사본','비자','항공티켓','여행자보험'],
                상비약: ['소화제','진통제','소염제'],
                의류: ['하의','잠옷','양말','속옷'],
                전자기기: ['충전기','보조배터리'],
                미용: ['스킨/로션','선크림','치약/칫솔'],
                기타: ['우산','물티슈','지퍼백','샤워필터']}

    const [checked,setChecked]=useState([])

    const navigate = useNavigate()

    const { loginUser } = useWebStore()

    if (!loginUser) {
        return( 
            <div className="mypage-login-error">
                <h2>로그인 정보가 없습니다.</h2>
                <button className="goto-login" 
                        onClick={()=>navigate('/LoginPage')}>로그인 하러가기</button>
            </div>
    )
    }

    const toggle=(key)=>{
        setChecked((prev)=>prev.includes(key) ? prev.filter((i)=>i !== key):[...prev,key])
    }

    const totalCount = Object.values(tips).flat().length
    const checkedCount = checked.length

    return(
        <div className="check-wrap">
            <div className="check-card">

                <div className="check-header">
                    <h2 style={{padding:'0 20px', color:'#1c2f5f', fontSize:'40px'}}> CHECK LIST</h2>
                </div>

                <div className="check-list">
                    {
                        Object.entries(tips).map(([a,b]) => (
                            <div className="top" key={a}>
                                <div className="category-title">{a}</div>

                                {b.map((c) => {const list = a + c
                                    return(
                                        <label key={list} className="ready">

                                            <div className="ready-left">
                                                <input type="checkbox" checked={checked.includes(list)} onChange={() => toggle(list)}/>
                                                <span className={`item-name ${checked.includes(list) ? "done" : ""}`}>{c}</span>
                                            </div>

                                            <span className={checked.includes(list) ? "state done" : "state wait"}>
                                                {checked.includes(list) ? "확인" : "미확인"}
                                            </span>

                                        </label>
                                    )
                                })}
                            </div>
                        ))
                    }
                </div>

                <div className="bottom-row">
                    <span>{totalCount}개 항목 중 {checkedCount}개 완료</span>
                    <button type="button" className="add-btn" onClick={() => setChecked([])}>초기화</button>
                </div>

            </div>
        </div>
    )
}