import React from "react";

export default function ReservationCard({item}){

    if (!item){ 
        return null}
    
    return(
        <div className="reCard">
            <h3>{item.title}</h3>
            <p>여행지 : {item.destination}</p>
            <p>날짜 : {item.startDate} ~ {item.endDate}</p>
            <p>일정 : {item.days}</p>
            
        </div>
    )
}