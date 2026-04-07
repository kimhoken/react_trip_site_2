import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mainseviecs.css";
import { QnAServicelist } from "./QnAServieslist";

const settingqnalist = [
  { id: 1, name: "예약/결제" },
  { id: 2, name: "취소/변경" },
  { id: 3, name: "여행/상품정보" },
  { id: 4, name: "계정/기타" },
];

const Mainsevieces = () => {
  const [selectedId, setselectedId] = useState(1);

  const filteredQnaList = QnAServicelist.filter(
    (item) => item.tag === selectedId
  );

  return (
    <div>
      <div>
        <h1>고객센터</h1>
        <div>여행 관련 도움이나 궁금한 점이 있으신가요? 고객센터에서 확인해 보세요.</div>
      </div>

      <div>
        <h3>공지사항</h3>
        <p>여행 및 고객센터 관련 주요 공지사항을 확인하세요.</p>
        <Link to="/CustomerService/notice">공지사항 더보기</Link>
      </div>

      <div>
        <h3>Q&A</h3>
        <p>자주 묻는 질문을 확인하고 궁금증을 해결해 보세요</p>
        <Link to="/CustomerService/qna">자주 묻는 질문 더보기</Link>
      </div>

      <div>
        <h3>문의하기</h3>
        <p>궁금한 점을 문의하시면 원활하게 답변해 드리겠습니다</p>
        <Link to="/CustomerService/inquirymail">문의하기</Link>
      </div>

      <div>
        <h1>자주 묻는 질문</h1>

        {settingqnalist.map((settingqna) => (
          <p
            key={settingqna.id}
            onClick={() => setselectedId(settingqna.id)}
            style={{
              cursor: "pointer",
              fontWeight: selectedId === settingqna.id ? "bold" : "normal",
            }}
          >
            {settingqna.name}
          </p>
        ))}
      </div>

      <div className="qnalist">
        {filteredQnaList.length > 0 ? (
          filteredQnaList.map((item) => (
            <div key={item.id} className="qna-item">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          ))
        ) : (
          <p>해당 카테고리의 질문이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Mainsevieces;