import React, { useEffect, useState } from "react";
import './Write.css'
import useWebStore from "../Store/useWebStore";
import { useNavigate } from "react-router-dom";

export default function Write(){

    const navigate = useNavigate();

    const { loginUser, addPost } = useWebStore();
    const today = new Date().toLocaleDateString('sv-SE');

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('여행 후기');
    const [content, setContent] = useState('');


    const submit = () =>{
        if (title.trim() === '' || content.trim() === '') {
            alert('제목과 내용을 입력하세요');
            return;
        }

        const newPost = {
            id: Date.now(),
            type: category,
            title: title,
            writer: loginUser?.name || '',
            date: today,
            view: 0,
            content: content
        };

        addPost(newPost);
        alert('작성되었습니다.');
        navigate('/board');
    }

    return(
        <div className="back">

            <div className="head">
                <label> 작성자 </label>
                <input value={loginUser?.name || ''} readOnly />
                <label> 작성일 </label>
                <input value={today} readOnly />
            </div>
            <div className="title">
                <label> 제목 </label>
                <input  placeholder="제목"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} />

                <label> 말머리 </label>
                <select
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}>
                    <option>여행 후기</option>
                </select>
                
            </div>
            <div>
                <textarea placeholder="내용을 입력하세요" 
                          value={content}
                          onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div>
                <button onClick={() =>{ 
                                    alert('작성을 취소합니다.')
                                    navigate('/board')}}>작성 취소</button>
                <button onClick={submit} >작성</button>
            </div>
        </div>
    )
}