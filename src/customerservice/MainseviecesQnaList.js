import React from "react";
import { QnAServicelist } from "./QnAServieslist";

const MainseviecesQnaList = () => {
  return (
    <div className="qna-wrap">
      <div className="qna-header">
        <h2>Q&A</h2>
        
      </div>

      <div className="qna-list">
        {QnAServicelist.map((item) => (
          <div className="qna-card" key={item.id}>
           
            <h3 className="qna-title">{item.title}</h3>

            <p className="qna-content">
              {item.content}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MainseviecesQnaList;