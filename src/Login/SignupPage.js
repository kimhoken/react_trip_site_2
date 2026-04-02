import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function SignupPage({ users, setUsers }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        id: '',
        pw: '',
        pwCheck: '',
        birth: '',
        email: '',
        phone: ''
    })


    const [errors, setErrors] = useState({
        name: '',
        id: '',
        pw: '',
        pwCheck: '',
        phone: '',
        birth: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }))
    }


    const check = (value = user.id) => {
        if (!value) {
            setErrors((prev) => ({
                ...prev,
                id: '아이디를 입력해주세요.'
            }));
            return false;
        }

        const existUser = users.find((u) => u.id === value);

        if (existUser) {
            setErrors((prev) => ({
                ...prev,
                id: '중복된 아이디입니다.'
            }));
            return false;
        }

        return true;
    }

    const signUp = () => {
        let valid = true;

        const newErrors = {
            name: '',
            id: '',
            pw: '',
            pwCheck: '',
            phone: '',
            birth: ''
        }

        if (!check()) {
            valid = false;
            newErrors.id = errors.id || '- 아이디를 입력해주세요.'
        }

        if (!user.name) {
            newErrors.name = '- 이름을 입력해주세요.'
            valid = false;
        }

        if (!user.id) {
            newErrors.id = '- 아이디를 입력해주세요.'
            valid = false;
        }

        if (!user.pw) {
            newErrors.pw = '- 비밀번호(8~24자리)를 입력해주세요.'
            valid = false;
        } else if (user.pw.length < 8 || user.pw.length > 24) {
            newErrors.pw = '- 비밀번호(8~24자리)를 입력해주세요.'
            valid = false;
        }

        if (!user.pwCheck) {
            newErrors.pwCheck = '- 비밀번호 확인을 입력해주세요.'
            valid = false;
        } else if (user.pw !== user.pwCheck) {
            newErrors.pwCheck = '- 비밀번호가 일치하지 않습니다.'
            valid = false;
        }

        if (!user.phone) {
            newErrors.phone = '- 전화번호를 입력해주세요.'
            valid = false;
        }

        if (!user.birth) {
            newErrors.birth = '- 생년월일을 선택해 주세요.'
            valid = false;
        }

        setErrors(newErrors)

        if (!valid) return

        const newUser = {
            name: user.name,
            id: user.id,
            pw: user.pw,
            phone: user.phone,
            birth: user.birth,
            email: user.email
        }

        setUsers([...users, newUser]);
        alert(newUser.id + '님 환영합니다.');
        navigate('/Login')
    }

    return (
        <div>
            <SignupForm
                user={user}
                errors={errors}
                handleChange={handleChange}
                check={check}
                signUp={signUp}
            />
        </div>
    )
}