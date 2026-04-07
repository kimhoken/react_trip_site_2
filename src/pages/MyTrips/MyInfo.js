import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWebStore from "../../Store/useWebStore";
import './MyInfo.css';

export default function MyInfo(){

    const navigate = useNavigate()
    const {loginUser}=useWebStore()
    const [menu, setMenu] = useState('')

    return(
        <div className="iwrap">
            <div className="iheader">
                <button className="back-btn" onClick={() => navigate(-1)}>← 내정보 관리</button>
            </div>

            <div className="iid">
            <p>{loginUser.id}님의 정보관리</p>
            </div>

            <div className="ibox">
                <div>
                    <p onClick={() => setMenu(menu === "info" ? "" : "info")}>개인정보 확인<span>›</span></p>
                    {menu === "info" && (
                    <div className="inbox">
                    <h4>개인정보</h4>
                    <p>아이디: {loginUser.id}</p>
                    <p>전화번호: {loginUser.phone}</p>
                    <p>이메일: {loginUser.email}</p>
                    </div>
                )}
                </div>

                <div>
                <p onClick={() => setMenu(menu === "term" ? "" : "term")}>약관 확인<span>›</span></p>
                {menu === "term" && (
                    <div className="inbox">
                    <h4>약관 내용</h4>
                    <p>마케팅 수신 동의 (이메일/SMS) 시 상품 혜택 및 이벤트 정보를 받으실 수 있습니다.</p>
                    <p>예약/결제 정보 안내 등은 마케팅 수신 동의와 상관없이 발송됩니다.</p>
                    </div>
                )}
                </div>

                <div>
                <p onClick={() => setMenu(menu === "pw" ? "" : "pw")}>비밀번호 변경<span>›</span></p>
                {menu === "pw" && (
                    <div className="inbox">
                    <h4>비밀번호 변경</h4>
                    <Link to="/ForgotPassword">비밀번호 변경</Link>
                    </div>
                )}
                </div>

                <div>
                <p onClick={() => setMenu(menu === "logout" ? "" : "logout")}>로그아웃<span>›</span></p>
                {menu === "logout" && (
                    <div className="inbox">
                    <button onClick={() => {localStorage.removeItem("loginUser");navigate("/");}}>
                        로그아웃 하시겠습니까?
                    </button>
                    </div>
                )}
                </div>


            </div>
        </div>
    )
}