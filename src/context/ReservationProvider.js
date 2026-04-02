import React, { createContext, useEffect, useState } from "react";

export const ReservationContext=createContext()

export function ReservationProvider({children}){

    const [reservations, setReservations] = useState([])
    const [canceledReservations, setCanceledReservations] = useState([])

    // 로컬스토리지에서 예약 불러오기
    useEffect(() => {

        const saved = localStorage.getItem("reservations")
        const canceled = localStorage.getItem("canceledReservations")

        if (saved && saved !== "undefined") {//if(saved){
            setReservations(JSON.parse(saved))
        }
        if (canceled && canceled !== "undefined") {//if(canceled){
            setCanceledReservations(JSON.parse(canceled));
    }
    },[])

    //예약 변경 시 로컬스토리지에 저장
    useEffect(() => {
        localStorage.setItem("reservations", JSON.stringify(reservations))},[reservations])


    // 취소내역 변경 시 로컬스토리지에 저장
    useEffect(() => {
        localStorage.setItem("canceledReservations", JSON.stringify(canceledReservations))}, [canceledReservations])

    //새예약 추가    
    const addReservation = (reservation) => {
        setReservations((prev) => [...prev, reservation])
    }

    //취소내역
    const deleteReservation = (id) => {
        setReservations((prev) => {
            const canceled = prev.find((item) => item.id === id)
            if (canceled) {
                setCanceledReservations((prevCanceled) => [...prevCanceled, canceled])
            }
            return prev.filter((item) => item.id !== id)
        })
    }        

    return(
        <ReservationContext.Provider value={{reservations,canceledReservations,addReservation,deleteReservation}} >
            {children}
        </ReservationContext.Provider>
    )
}