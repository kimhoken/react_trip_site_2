import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function SignupPage({ users, setUsers }) {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [birth, setBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [pwError, setPwError] = useState('');
    const [pwCheckError, setPwCheckError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [birthError, setBirthError] = useState('');


    const [checkId, setCheckId] = useState(false)

    const check = () => {
        if (id) {
            const user = (users.find((u) => (u.id === id)))
            if (user) {
                alert('중복된 아이디입니다.')
            } else {
                alert('사용가능한 아이디입니다.')
                setCheckId(true)
            }
        } else {
            alert('아이디를 입력해주세요.')
        }
    }

    const signUp = () => {

        let valid = true;

        setNameError('');
        setIdError('');
        setPwError('');
        setPwCheckError('');
        setPhoneError('');

        if (!checkId) {
            setIdError('아이디 중복검사 미완료.')
            valid = false;
        }
        if (!name) {
            setNameError('이름을 입력해주세요.')
            valid = false;
        }
        if (!id) {
            setIdError('아이디를 입력해주세요.')
            valid = false;
        }
        if (!pw) {
            setPwError('비밀번호(8~24자리)를 입력해주세요.')
            valid = false;
        } else if (pw.length < 8 || pw.length > 24) {
            setPwError('비밀번호(8~24자리)를 입력해주세요.')
            valid = false;
        }
        if (!pwCheck) {
            setPwCheckError('비밀번호 확인을 입력해주세요.')
            valid = false;
        } else if (pw !== pwCheck) {
            setPwCheckError('비밀번호가 일치하지 않습니다.')
            valid = false;
        }
        if (!phone) {
            setPhoneError('전화번호를 입력해주세요.')
            valid = false;
        }
        if (!birth) {
            setBirthError('생년월일을 선택해 주세요.')
            valid = false;
        }


        if (!valid)
            return;

        const newUser = {
            name,
            id,
            pw,
            phone,
            birth,
            email

        };
        setUsers([...users, newUser]);
        alert(newUser.id)
        navigate('/Login')
    }


    return (
        <div>
            <SignupForm
                name={name}
                setName={setName}
                id={id}
                setId={setId}
                pw={pw}
                setPw={setPw}
                pwCheck={pwCheck}
                setPwCheck={setPwCheck}
                birth={birth}
                setBirth={setBirth}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}

                nameError={nameError}
                idError={idError}
                pwError={pwError}
                pwCheckError={pwCheckError}
                phoneError={phoneError}
                birthError={birthError}

                setNameError={setNameError}
                setIdError={setIdError}
                setPwError={setPwError}
                setPwCheckError={setPwCheckError}
                setPhoneError={setPhoneError}
                setBirthError={setBirthError}
                setCheckId={setCheckId}

                check={check}
                signUp={signUp}
            />
        </div>
    )
}