import React, { useContext, useEffect, useState } from "react";
import ReservationCard from "../../components/ReservationCard";
import ReservationContext from "../../context/ReservationProvider";

export default function ReservationList(){

    const {reservations, deleteReservation}=useContext(ReservationContext)

    if (!reservations) return <p>로딩중...</p>;

    return(
        <div>
            <h2>내 예약</h2>

            {
                reservations.length===0 ? (<p>예약이 존재하지 않습니다.</p>) : 
                (
                    reservations.map((item)=>(
                        <div>
                            <ReservationCard item={item} />
                            <button onClick={() => deleteReservation(item.id)}>삭제</button>
                        </div>
                    ))
                )
            }
        </div>
    )
}