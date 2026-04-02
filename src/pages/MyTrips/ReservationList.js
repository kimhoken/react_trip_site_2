import React, { useEffect, useState } from "react";
import ReservationCard from "../../components/ReservationCard";

export default function ReservationList({data,onDelete}){

    if (!data) return <p>로딩중...</p>;

    return(
        <div>
            <h2>내 예약</h2>

            {
                data.length===0 ? (<p>예약이 존재하지 않습니다.</p>) : 
                (
                    data.map((item)=>(
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