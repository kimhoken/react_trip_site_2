import React, { useContext,  useState } from "react";
import ReservationCard from "../../components/ReservationCard";
import './ReservationList.css';
import useWebStore from "../../Store/useWebStore";

export default function ReservationList(){

    const {loginUser,reservations,cancelReservations,cancelReservation,delCanReservation}=useWebStore()

    const [activeTab,setActiveTab]=useState('reservation')

    const myReservation = reservations.filter(
        (item) => item.userId === loginUser?.id
    );

    const myCancel = cancelReservations.filter(
        (item) => item.userId === loginUser?.id
    );

    if (!reservations || !cancelReservations) return <p>로딩중...</p>;

    return(
        <div className="reForm">
            <h2>내 예약/취소 내역</h2>

            <div className="reTab">
                <button className={activeTab === "reservation" ? "tab active" : "tab"} onClick={() => setActiveTab("reservation")}>예약내역</button>
                <button className={activeTab === "cancel" ? "tab active" : "tab"} onClick={() => setActiveTab("cancel")}>취소내역</button>
            </div>    

            {activeTab === "reservation" && (
                <>
                {myReservation.length===0 ? (<p>예약이 존재하지 않습니다.</p>) : 
                (
                    myReservation.map((item)=>(
                        <div className="reB">
                            <ReservationCard item={item} />
                            <button onClick={() => cancelReservation(item.id)}>취소</button>
                        </div>
                    ))
                )}
                </>
            )}

            {
                activeTab==='cancel' &&(
                    <>
                    {myCancel.length===0 ? (<p>취소된 예약이 없습니다.</p>) : 
                    (myCancel.map((item)=>(
                        <div className="reB">
                            <ReservationCard item={item}/>
                            <button onClick={()=>delCanReservation(item.id)}>삭제</button>
                        </div>
                    ))
                )
                }
                </>
            )}
        </div>
    )
}