import React from "react";
import './Write.css'
import useWebStore from "../Store/useWebStore";

export default function Write(){

    const { loginUser } = useWebStore();

    return(
        <div className="back">

            <div className="head">
                <label> 작성자 </label>
                <input placeholder="작성자"/>
                <label> 작성일 </label>
                <input placeholder="작성일" />
            </div>
            <div className="title">
                <label> 제목 </label>
                <input placeholder="제목" />

                <label> 말머리 </label>
                <select>
                    <option>Q&A</option>
                    <option>여행 후기</option>
                </select>
                
            </div>
            <div>
                <textarea placeholder="내용을 입력하세요" />
            </div>
            <div>
                <button>작성 취소</button>
                <button>제출</button>
            </div>
        </div>
    )
}