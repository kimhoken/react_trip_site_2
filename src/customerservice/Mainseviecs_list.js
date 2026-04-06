import React from "react";
import { Announcementlist } from "./Announcementlist";
import "./Announcement.css";

const Mainservices_list = () => {
  return (
    <div className="announcement-wrap">
      <div className="announcement-header">
        <h2>공지사항</h2>
        <p>여행 및 고객센터 관련 주요 안내사항을 확인하세요.</p>
      </div>

      <div className="announcement-list">
        {Announcementlist.map((item) => (
          <div className="announcement-card" key={item.id}>
            <h3 className="announcement-title">{item.title}</h3>
            <p className="announcement-content">
              {item.content}
            </p>

            <div className="announcement-bottom">
              <span className="announcement-date">작성일: {item.date}</span> 
              <br/>
              <span>조회수: {item.view}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainservices_list;