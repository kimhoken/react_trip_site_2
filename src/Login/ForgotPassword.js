import React, { useState } from "react";
import FindId from "./FindId";
import FindPw from "./FindPw";
import './ForgotPassword.css'
import logo from '../Images/logo.png';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword({users}){

    const navigate = useNavigate();

    const[find,setFind] = useState('id')

    return(
        <div className="fmain">
            <img className="home" src={logo} style={{width:300}} onClick={()=>navigate('/')}/>
            <div className="btnbox">
            <button style={{fontWeight: find==='id'? 'bold' : 'normal'}} onClick={()=>(setFind('id'))}>아이디 찾기</button>
            <button style={{fontWeight: find==='pw'? 'bold' : 'normal'}} onClick={()=>(setFind('pw'))}>비밀번호 재설정</button>
            </div>
            {
                find === 'id' && <FindId users={users}/>
            }
            {
                find === 'pw' && <FindPw users={users}/>
            }  
            
        </div>
    )
}