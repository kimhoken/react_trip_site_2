import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css"

export default function LoginPage({users}){

    const navigate = useNavigate();

    const[id,setId] = useState('')
    const[pw,setPw] = useState('')


    const join=()=>{
        navigate('/SignupPage')
    }
    const find=()=>{
        navigate('/ForgotPassword')
    }

    const login=()=>{

        const user = users.find((u)=>(u.id===id))

        if(user){
            if(user.pw== pw){
                alert('로그인 성공')
            }else{
                alert('비밀번호가 일치하지 않습니다.')
                return;
            }
        }else{
            alert('아이디/비밀번호가 일치하지 않습니다.')
            return;
        }
    }

    return(
        <div className="LogMain">
            <h2 className="title">로그인</h2>
            <div className="Id">
                아이디
            </div>
            <div className="Idinput">
                <input  className="input"
                        placeholder="아이디를 입력하세요"
                        value={id}
                        onChange={(e)=>(setId(e.target.value))}
                         />
            </div>
            <div className="Pw">
                비밀번호
            </div>
            <div className="Pwinput">
                <input  className="input"
                        type="password"
                        value={pw}
                        onChange={(e)=>(setPw(e.target.value))}
                        placeholder="비밀번호를 입력하세요"
                         />
            </div>
            <div>
                <button className="Loginbtn" onClick={login}>로그인</button>
            </div>
            <br/>
            <div className="btn-row">
                <button className="joinbtn" onClick={join}>회원가입</button>

                <button className="findbtn" onClick={find}>아이디/비밀번호 찾기</button>
            </div>
        </div>
    )
}