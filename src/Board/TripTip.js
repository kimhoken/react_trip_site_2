import React from "react";
import { useNavigate } from "react-router-dom";
import TripTipList from './List/TripTipList'
import './TripTip.css';

export default function TripTip(){

    const navigate = useNavigate();

    return(
        <div className="triptip-container">
            <h2 className="triptip-title">Trip Tip</h2>
            <div>
                <table className="triptip-table">
                    <thead>
                        <tr>
                            <th>말머리</th>
                            <th>제목</th>
                            <th>글쓴이</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TripTipList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.type}</td>
                                <td className="triptip-link"
                                    onClick={()=>navigate('/triptip/'+item.id)}
                                    style={{cursor:'pointer', fontWeight:'bold'}}>
                                    {item.title}</td>
                                <td>{item.writer}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}