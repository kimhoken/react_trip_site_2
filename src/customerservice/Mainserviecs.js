import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mainserviecs.css";
import { QnAServicelist } from "./QnAServieslist";

const settingqnalist = [
  { id: 1, name: "예약/결제" },
  { id: 2, name: "취소/변경" },
  { id: 3, name: "여행/상품정보" },
  { id: 4, name: "계정/기타" },
];

const Mainservieces = () => {
  const [selectedId, setselectedId] = useState(1);
  const [openId, setOpenId] = useState(null);

  const filteredQnaList = QnAServicelist.filter(
    (item) => item.tag === selectedId
  );

  return (
    <div>
      <div className="sub_main">
        <h1 className="mainservieces_title">고객센터</h1>
        <div className="mainservieces_content">
          여행 관련 도움이나 궁금한 점이 있으신가요? 고객센터에서 확인해 보세요.
        </div>
      </div>

      <div className="sub_card">
        <div className="subservieces_an">
          <h3 className="subservieces_title_an">공지사항</h3>
          <p className="subservieces_content_an">
            여행 및 고객센터 관련 주요 공지사항을 확인하세요.
          </p>
          <Link to="/CustomerService/notice">공지사항 더보기</Link>
        </div>

        <div className="subservieces_qna">
          <h3 className="subservieces_title_qna">Q&A</h3>
          <p className="subservieces_content_qna">
            자주 묻는 질문을 확인하고 궁금증을 해결해 보세요
          </p>
          <Link to="/CustomerService/qna">자주 묻는 질문 더보기</Link>
        </div>

        <div className="subservieces_ask">
          <h3 className="subservieces_title_ask">문의하기</h3>
          <p className="subservieces_content_ask">
            궁금한 점을 문의하시면 원활하게 답변해 드리겠습니다
          </p>
          <Link to="/CustomerService/inquirymail">문의하기</Link>
        </div>
      </div>

      <div className="qnatag_list">
        <h1 className="taglist_title">자주 묻는 질문</h1>

        {settingqnalist.map((settingqna) => (
          <p
            className="tag_list"
            key={settingqna.id}
            onClick={() => {
              setselectedId(settingqna.id);
              setOpenId(null);
            }}
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
              <h4
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                style={{ cursor: "pointer" }}
              >
                <span>{item.title}</span>
              </h4>

              {openId === item.id && <p>{item.content}</p>}
            </div>
          ))
        ) : (
          <p>해당 카테고리의 질문이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Mainservieces;