import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';
import "./Loginpage.css"

export default function LoginPage({users}){

    const navigate = useNavigate();

    const[id,setId] = useState('')
    const[pw,setPw] = useState('')
    const[error,setError] = useState('')


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
                alert(id+'님 환영합니다.')
                navigate('/')
            }else if(pw===''){
                setError('비밀번호를 입력해주세요.')
                return;
            }else{
                setError('비밀번호가 일치하지 않습니다.')
                return;
            }
        }else if(id===''){
            setError('아이디를 입력해주세요.')
            return;
        }else{
            setError('아이디/비밀번호가 일치하지 않습니다.')
            return;
        }
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