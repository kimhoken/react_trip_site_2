import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inquirypage.css";

const Inquirypage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    inquiryType: "",
    content: "",
    agree: "",
  });

  const inquirybtn = () => {
    let newErrors = {
      name: "",
      email: "",
      inquiryType: "",
      content: "",
      agree: "",
    };

    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
      isValid = false;
    }

    if (!inquiryType) {
      newErrors.inquiryType = "문의 유형을 선택해주세요.";
      isValid = false;
    }

    if (!content.trim()) {
      newErrors.content = "문의 내용을 입력해주세요.";
      isValid = false;
    }

    if (!agree) {
      newErrors.agree = "개인정보 수집 및 이용에 동의해주세요.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert("문의가 전송되었습니다.");
      navigate("/CustomerService");
    }
  };

  return (
    <div className="inquiry_wrap">
      <div className="inquiry_header">
        <h1 className="inquiry_title">문의하기</h1>
        <p className="inquiry_text">
          궁금한 사항을 적어서 보내주시면 빠르게 답변해 드리겠습니다
        </p>
      </div>

      <div className="inquiry_box">
        <p className="inquiry_label">이름</p>
        <input
          className="inquiry_input"
          placeholder="이름을 입력하세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error_text">{errors.name}</p>}

        <p className="inquiry_label">이메일</p>
        <input
          className="inquiry_input"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error_text">{errors.email}</p>}

        <p className="inquiry_label">문의 유형</p>
        <select
          className="inquiry_select"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
        >
          <option value="" disabled>
            문의 유형 선택
          </option>
          <option value="general">일반문의</option>
          <option value="billing">결제문의</option>
          <option value="technical">기술문의</option>
          <option value="feedback">피드백</option>
          <option value="others">기타</option>
        </select>
        {errors.inquiryType && (
          <p className="error_text">{errors.inquiryType}</p>
        )}

        <p className="inquiry_label">문의 내용</p>
        <textarea
          className="inquiry_area"
          rows="5"
          placeholder="문의 내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && <p className="error_text">{errors.content}</p>}

        <div className="inquiry_check">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            개인정보 수집 및 이용에 동의합니다.
          </label>
          {errors.agree && <p className="error_text">{errors.agree}</p>}
        </div>

        <button className="inquiry_btn" onClick={inquirybtn}>
          문의하기
        </button>
      </div>
    </div>
  );
};

export default Inquirypage;
