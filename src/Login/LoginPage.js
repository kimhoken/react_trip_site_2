import react, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';
import "./Loginpage.css"
import useWebStore from "../Store/useWebStore";

export default function LoginPage(){

    const hasAlerted = useRef(false);
    const navigate = useNavigate();
    const {login, loginUser} = useWebStore();

    const[id,setId] = useState('')
    const[pw,setPw] = useState('')
    const[error,setError] = useState('')

    useEffect(()=>{
        if(loginUser && !hasAlerted.current){
            hasAlerted.current=true
            alert('이미 로그인 상태입니다.')
            navigate(-1, { replace: true });
        }
    },  [])


    const dologin = () => {
        const result = login(id, pw);

        if (!result.ok) {
            setError(result.msg);
            return;
        }
        alert(id+"님 환영합니다.")
        navigate('/');
    };
    


    const join=()=>{
        navigate('/SignupPage')
    }
    const find=()=>{
        navigate('/ForgotPassword')
    }


    return(
        <div className="LogMain">
            <img className="home" src={logo} style={{width:300}} onClick={()=>navigate('/')}/>
            <div className="Idinput">
                <input  className="input"
                        type="text" 
                        value={id}
                        onChange={(e)=>(setId(e.target.value))}
                        required />
                <label>아이디</label>
            </div>

            <div className="Pwinput">
                <input  className="input"
                        type="password"
                        value={pw}
                        onChange={(e)=>(setPw(e.target.value))}
                        required />
                <label>비밀번호</label>
            </div>
            <div className="error">
                {error}
            </div>
            <div>
                <button className="Loginbtn" onClick={dologin}>로그인</button>
            </div>
            <br/>
            <div className="btn-row">
                <button className="joinbtn" onClick={join}>회원가입</button>

                <button className="findbtn" onClick={find}>아이디/비밀번호 찾기</button>
            </div>
            
        </div>
    )
}