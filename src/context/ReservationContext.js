import React, { createContext, useEffect, useState } from "react";

export const ReservationContext = createContext()

export default function ReservationContext({children}){

    const [reservations, setReservations] = useState()

    // 로컬스토리지에서 예약 불러오기
    useEffect(() => {
        const saved = localStorage.getItem("reservations")
        if(saved){
        setReservations(JSON.parse(saved))
        }
    },[])

  //예약 변경 시 로컬스토리지에 저장
     useEffect(() => {
        localStorage.setItem("reservations", JSON.stringify(reservations))},[reservations])
 
  //새예약 추가
    const addReservation = (reservation) => {
        setReservations(prev => [...prev, reservation])
    }
  //예약삭제
    const deleteReservation = (id) => {
        setReservations(prev => prev.filter(item => item.id !== id))
    }

    return(
        <ReservationContext.Provider value={{reservations,addReservation,deleteReservation}}>
            {children}
        </ReservationContext.Provider>
    )
}