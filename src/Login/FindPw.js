import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css'

export default function FindPw({users}){

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
            <div>
                아이디
                <input  placeholder="아이디를 입력하세요."
                        value={id}
                        onChange={(e)=>setId(e.target.value)}
                        />
            </div>
            <div>
                전화번호
                <input  placeholder="전화번호를 입력하세요."
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
            </div>
            <button onClick={findPw}>찾기</button>
        </div>
    )
}