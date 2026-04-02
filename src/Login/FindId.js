import React, { useState } from "react";


export default function FindId({users}){

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
            <div>
                이름 
                <input  placeholder="이름을 입력하세요." 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
            </div>
            <div>
                전화번호
                <input  placeholder="전화번호를 입력하세요."
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
            </div>
            <button onClick={findId}>찾기</button>
        </div>
    )
}