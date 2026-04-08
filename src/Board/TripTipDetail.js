import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripTipList from "./List/TripTipList";
import "./TripTipDetail.css";

export default function TripTipDetail() {
    const navigate = useNavigate();
    const params = useParams();

    const id = Number(params.id);
    const post = TripTipList.find((item) => item.id === id);

    if (!post) {
        return (
            <div className="triptip-not-found">
                <h2>존재하지 않는 게시글입니다.</h2>
                <button
                    className="triptip-detail-btn"
                    onClick={() => navigate('/triptip')}
                >
                    목록으로
                </button>
            </div>
        );
    }

    return (
        <div className="triptip-detail-container">
            <h2 className="triptip-detail-title">{post.title}</h2>

            <div className="triptip-detail-info">
                <p>말머리 : {post.type}</p>
                <p>작성자 : {post.writer}</p>
                <p>작성일 : {post.date}</p>
            </div>

            <div className="triptip-detail-content">
                {post.content}
            </div>

            <div className="triptip-detail-btn-box">
                <button
                    className="triptip-detail-btn"
                    onClick={() => navigate('/triptip')}
                >
                    목록으로
                </button>
            </div>
        </div>
    );
}