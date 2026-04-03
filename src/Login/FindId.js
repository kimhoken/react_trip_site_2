import React, { useState } from "react";
import './ForgotPassword.css'
import './FindIdPw.css'
import useWebStore from "../Store/useWebStore";

export default function FindId(){

    const {users} = useWebStore();
    const[name,setName] = useState('')
    const[phone,setPhone] = useState('')
    
    const findId=()=>{

        const user= users.find((u)=>(u.phone===phone))

        if (user){
           if(user.name === name){
            alert('아이디는 '+user.id+'입니다.')
           }else{
            alert('회원정보가 존재하지 않습니다.')
           }
        }else{
            alert('회원정보가 존재하지 않습니다.')
        }

    }

    return(
        <div>
            <div className="nameinput">
                <input   
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required />
                <label>이름</label>
            </div>
            <div className="phoneinput">
                <input  
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        required />
                <label>전화번호</label>
            </div>
            <button className="findbtn" onClick={findId}>찾기</button>
        </div>
    )
}