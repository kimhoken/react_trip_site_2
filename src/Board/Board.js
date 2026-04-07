import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
import useWebStore from "../Store/useWebStore";

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
        <div>

            <div>
                <table border='1'>
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
            <div>
                <button onClick={write}>글쓰기</button>
            </div>
        </div>
    )
}