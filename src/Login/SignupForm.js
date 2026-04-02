import React from "react";

export default function SignupForm({
        name, setName, id, setId, pw, setPw,
        pwCheck, setPwCheck, birth, setBirth,
        email, setEmail, phone, setPhone,

        nameError, idError, pwError,
        pwCheckError, phoneError, birthError,

        setNameError, setIdError, setPwError,
        setPwCheckError, setPhoneError, setBirthError,
        setCheckId,

        check, signUp
    } ) {
     
    return (
        <div>
            <form>
                <h1>회원가입</h1>

                <div>
                    <a style={{ fontWeight: 'bold' }}>이름</a>
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setNameError('')
                        }}
                        placeholder="이름을 입력해주세요" />
                    <div style={{ color: 'red' }}>{nameError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>아이디</a>
                    <input
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value)
                            setIdError('')
                            setCheckId(false)
                        }}
                        placeholder="아이디를 입력해주세요" />
                    <button type="button" onClick={check}>중복검사</button>
                    <div style={{ color: 'red' }}>{idError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>비밀번호</a>
                    <input
                        type="password"
                        value={pw}
                        onChange={(e) => {
                            setPw(e.target.value)
                            setPwError('')
                        }}
                        placeholder="비밀번호(8~24자리)를 입력해주세요" />
                    <div style={{ color: 'red' }}>{pwError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>비밀번호 확인</a>
                    <input
                        type="password"
                        value={pwCheck}
                        onChange={(e) => {
                            setPwCheck(e.target.value)
                            setPwCheckError('')
                        }}
                        placeholder="비밀번호(8~24자리)를 입력해주세요" />
                    <div style={{ color: 'red' }}>{pwCheckError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>전화번호</a>
                    <input
                        type="number"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value)
                            setPhoneError('')
                        }}
                        placeholder="01012345678" />
                    <div style={{ color: 'red' }}>{phoneError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>생년월일</a>
                    <input
                        type="date"
                        value={birth}
                        onChange={(e) => {
                            setBirth(e.target.value)
                            setBirthError('')
                        }} />
                    <div style={{ color: 'red' }}>{birthError}</div>
                </div>
                <div>
                    <a style={{ fontWeight: 'bold' }}>이메일</a>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        placeholder="aaa@gmail.com" />
                    <div></div>
                </div>

                <button type="button" onClick={signUp}>회원가입</button>
            </form>
        </div>
    )
}