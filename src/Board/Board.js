import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
import useWebStore from "../Store/useWebStore";
import './Board.css'

export default function Board(){

    const{loginUser} = useWebStore();

    const navigate = useNavigate();

    const[board,setBoard]=useState('review');

    const write=()=>{
        if(!loginUser){
            alert('로그인이 필요합니다.')
            navigate('/LoginPage')
        }else{
            navigate('/Write')
        }
    }

    return(
        <div className="board-container">

            <h2 className="board-title">Trip Review</h2>

            <div >
                <table className="board-table">
                    <thead>
                        <tr>
                            <th>말머리</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            board === 'review' && < Review/>
                        }
                    </tbody>
                </table>
            </div>
            <div className="board-btn-box">
                <button className="write-btn" onClick={write}>글쓰기</button>
            </div>
        </div>
    )
}