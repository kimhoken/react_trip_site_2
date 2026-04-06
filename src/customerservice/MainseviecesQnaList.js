import React, { useState } from "react";
import { QnAServicelist } from "./QnAServieslist";
import "./QnAServies.css";

const MainseviecesQnaList = () => {
    const [touchTitle, setTouchTitle] = useState(null);

  return (
    <div className="qna-wrap">
      <div className="qna-header">
        <h2>Q&A</h2>
        
      </div>

      <div className="qna-list">
        {QnAServicelist.map((item) => (
          <div className={`qna-card ${touchTitle === item.id ? "active" : ""}`}
            key={item.id}
            onClick={() => setTouchTitle(touchTitle === item.id ? null : item.id)}
          >
           
            <h3 className="qna-title">{item.title}</h3>
            <p className="qna-content">{item.content}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MainseviecesQnaList;