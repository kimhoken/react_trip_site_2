import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';
import './SignupForm.css'


export default function SignupForm({
    user, errors, handleChange, signUp
}) {

    const navigate = useNavigate();


    return (
        <div >
            <form className="main">

                <img src={logo} className="img" style={{ width: 300, margin: '0 auto' }} onClick={() => navigate('/')} />

                <div className="first-box">
                    <div className="name">
                        <input name="name"
                            
                            value={user.name}
                            onChange={handleChange}
                            placeholder="이름" />

                    </div>
                    <div className="id">
                        <input name="id"
                            value={user.id}
                            onChange={handleChange}
                            placeholder="아이디" />

                    </div>
                </div>
                <div className="error">
                    <div style={{ color: 'red' }}>{errors.name}</div>
                    <div style={{ color: 'red' }}>{errors.id}</div>

                </div>
                <div className="second-box">
                    <div className="pw">
                        <input type="password"
                            name="pw"
                            value={user.pw}
                            onChange={handleChange}
                            placeholder="비밀번호"
                        />

                    </div>

                    <div className="pwCheck">
                        <input type="password"
                            name="pwCheck"
                            value={user.pwCheck}
                            onChange={handleChange}
                            placeholder="비밀번호 확인"
                        />

                    </div>
                </div>
                <div className="error">
                    <div style={{ color: 'red' }}>{errors.pw}</div>
                    <div style={{ color: 'red' }}>{errors.pwCheck}</div>
                </div>
                <div className="third-box">
                    <div className="phone">
                        <input
                            type="number"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            placeholder="전화번호(01012345678)" />

                    </div>
                    <div className="birth">
                        <input
                            type="number"
                            name="birth"
                            value={user.birth}
                            onChange={handleChange}
                            placeholder="생년월일(20000101)" />

                    </div>

                    <div className="email">
                        <input
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="[선택]이메일(aaa@example.com)" />
                        <div></div>
                    </div>
                </div>
                <div className="error">
                    <div style={{ color: 'red' }}>{errors.phone}</div>
                    <div style={{ color: 'red' }}>{errors.birth}</div>
                </div>
                <button className="btn" type="button" onClick={signUp}>회원가입</button>
            </form>
        </div>
    )
}