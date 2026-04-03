import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "./Review";
import Qna from "./Qna";

export default function Board(){

    const navigate = useNavigate();

    const[board,setBoard]=useState('review');

    return(
        <div>
            <div>
                <button onClick={()=>(setBoard('review'))}>여행 후기</button>
                <button onClick={()=>(setBoard('Qna'))}>Q & A</button>
            </div>
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>말머리</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            board === 'review' && < Review/>
                        }
                        {
                            board ===    'Qna' && < Qna/>
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={()=>navigate('/Write')}>글쓰기</button>
            </div>
        </div>
    )
}