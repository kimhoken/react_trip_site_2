import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWebStore from "../../Store/useWebStore";
import './MyPage.css';

const Mypage = () => {
  const navigate = useNavigate();
  const { loginUser, logout } = useWebStore();
  const [menu, setMenu] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!loginUser) {
    return (
      <div className="mypage-login-error">
        <h2>로그인 정보가 없습니다.</h2>
        <button className="goto-login" onClick={() => navigate("/LoginPage")}>
          로그인 하러가기
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>내 정보관리</h1>
      </div>

      <div>
        <div>
          <h2>{loginUser.name} 님</h2>
          <p>아이디: {loginUser.id}</p>
          <p>비밀번호 : {loginUser.pw}</p>
          <p>생년월일 : {loginUser.birth}</p>
          <p>전화번호: {loginUser.phone}</p>
          <p>이메일: {loginUser.email}</p>
        </div>
      </div>

      <div>
        <p onClick={() => setMenu(menu === "term" ? "" : "term")}>
          약관 확인 ▷
        </p>

        {menu === "term" && (
          <div>
            <p>
              • 마케팅 수신 동의 (이메일/SMS) 시 <br />
              상품 혜택 및 이벤트 정보를
              <br />
              받으실 수 있습니다.
            </p>
            <p>
              • 예약/결제 정보 안내 등은
              <br />
              마케팅 수신 동의와 <br />
              상관없이 발송됩니다.
            </p>
          </div>
        )}
      </div>

      <div>
        <Link to="/ForgotPassword">• 비밀번호 변경</Link>
      </div>

      <div>
        <button
          type="button"
          className="user-link signup logout"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Mypage;