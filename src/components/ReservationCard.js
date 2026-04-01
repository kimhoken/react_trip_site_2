import React from "react";

export default function ReservationCard({item}){

    if (!item) return null
    
    return(
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <h3>{item.title}</h3>
            <p>여행지: {item.destination}</p>
            <p>날짜: {item.date}</p>
        </div>
    )
}