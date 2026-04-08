import React from "react";
import "./ReservationCard.css";

export default function ReservationCard({item}){

    if (!item){ 
        return null}
    
    return(
        <div className="rcard">

            {item.image && (<img src={item.image} alt={item.title} className="rimg" />)}

            <div className="rinfo">
                <h3>{item.title}</h3>
                <p>여행지 : {item.destination}</p>
                <p>날짜 : {item.startDate} ~ {item.endDate}</p>
                <p>일정 : {item.days}</p>
            </div>
        </div>
    )
}