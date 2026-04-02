import React, { useState } from "react";
import FindId from "./FindId";
import FindPw from "./FindPw";

export default function ForgotPassword({users}){

    const[find,setFind] = useState('')

    return(
        <div>
            <button onClick={()=>(setFind('id'))}>아이디 찾기</button>
            <button onClick={()=>(setFind('pw'))}>비밀번호 재설정</button>
               {
                find === 'id' && <FindId users={users}/>
            }
            {
                find === 'pw' && <FindPw users={users}/>
            }  
            
        </div>
    )
}