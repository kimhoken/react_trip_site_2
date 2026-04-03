import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useWebStore from "../Store/useWebStore";

export default function ResetPw() {

    const { updateUser } = useWebStore();

    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;

    const [pw, setPw] = useState('')
    const [pwCheck, setPwCheck] = useState('')

    const change = () => {
        if (!user) {
            alert('잘못된 접근입니다.');
            return;
        }

        if (!pw || !pwCheck) {
            alert('비밀번호를 입력해주세요.');
            return;
        }

        if (pw.length < 8 || pw.length > 24) {
            alert('비밀번호는 8~24자리여야 합니다.');
            return;
        }

        if (pw !== pwCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const updatedUser = {
        ...user,
        pw: pw
        };

        updateUser(updatedUser);

        alert('비밀번호가 변경되었습니다.');
        navigate('/LoginPage')

    }

    return (
        <div>
            <div>
                비밀번호
                <input type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="비밀번호(8~24자리)를 입력해주세요" />
            </div>
            <div>
                비밀번호 재입력
                <input type="password"
                    value={pwCheck}
                    onChange={(e) => setPwCheck(e.target.value)}
                    placeholder="비밀번호(8~24자리)를 입력해주세요" />
            </div>
            <button onClick={change}>변경</button>
        </div>
    )
}