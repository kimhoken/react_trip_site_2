import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css'
import './FindIdPw.css'
import useWebStore from "../Store/useWebStore";

export default function FindPw(){

    const {users} = useWebStore();

    const navigate = useNavigate();

    const[id,setId] = useState('')
    const[phone,setPhone] = useState('')

    const findPw=()=>{
        const user = users.find((u)=>(u.id===id))
        if(user){
            if(user.phone===phone){
                alert('비밀번호를 재설정합니다.' )
                navigate('/ResetPw',{ state: { user } })
            }else{
                alert('회원정보가 존재하지 않습니다.')
            }
        }else{
            alert('회원정보가 존재하지 않습니다.')
        }
    }
    

    return(
        <div>
            <div className="idinput">
                <input  
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        required />
                <label>아이디</label>
            </div>
            <div className="phoneinput">
                <input  
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        required />
                <label>전화번호</label>
            </div>
            <button className="findbtn" onClick={findPw}>찾기</button>
        </div>
    )
}