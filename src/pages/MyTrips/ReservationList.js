import React, { useContext, useEffect, useState } from "react";
import ReservationCard from "../../components/ReservationCard";
import { ReservationContext } from "../../context/ReservationProvider";
import './ReservationList.css';

export default function ReservationList(){

    const {reservations,canceledReservations,deleteReservation}=useContext(ReservationContext)

    const [activeTab, setActiveTab]=useState('reservation')

    if (!reservations || !canceledReservations) return <p>로딩중...</p>;

    return(
        <div className="revaform">
            <h2>내 예약/취소 내역</h2>

            <div>
                <button className={activeTab === "reservation" ? "tab active" : "tab"} onClick={() => setActiveTab("reservation")}>예약내역</button>
                <button className={activeTab === "cancel" ? "tab active" : "tab"} onClick={() => setActiveTab("cancel")}>취소내역</button>
            </div>    

            {activeTab === "reservation" && (
                <>
                {reservations.length===0 ? (<p>예약이 존재하지 않습니다.</p>) : 
                (
                    reservations.map((item)=>(
                        <div className="reva">
                            <ReservationCard item={item} />
                            <button onClick={() => deleteReservation(item.id)}>삭제</button>
                        </div>
                    ))
                )}
                </>
            )}

            {
                activeTab==='cancel' &&(
                    <>
                    {canceledReservations.length===0 ? (<p>취소된 예약이 없습니다.</p>) : 
                    (canceledReservations.map((item)=>(
                        <div>
                            <ReservationCard item={item}/>
                        </div>
                    ))
                )
                }
                </>
            )}
        </div>
    )
}