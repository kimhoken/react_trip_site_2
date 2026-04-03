import React, { useContext, useState } from "react";
import { ReservationContext } from "../../context/ReservationProvider";
import Payment from "./Payment";

export default function ReservationForm(){
    const [open,setOpen]=useState(false);

    const {addReservation}=useContext(ReservationContext)

    const [city, setCity] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const getDays = () => {
        if(!startDate || !endDate){
            return ''
        }

        const start=new Date(startDate)
        const end=new Date(endDate)

        const diff=(end-start)/ (1000 * 60 * 60 * 24)

        if(diff<0){
            return '날짜를 다시 선택하세요'
        }

        if(diff==0){
            return '당일여행'
        }else{
            return diff+'박 '+(diff+1)+'일'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!city || !startDate || !endDate) {
            alert('체크가 안된 선택창이 있습니다')
            return
        }

        const newReservation = {
            id: Date.now(),
            title: city + " 여행",
            destination: city,
            startDate: startDate,
            endDate: endDate,
            days: getDays()
        }

        addReservation(newReservation)

        alert(
            "예약완료\n" +
            "도시 : " + city + "\n" +
            "출발날짜 : " + startDate + "\n" +
            "도착날짜 : " + endDate + "\n" +
            "일정 : " + getDays()
        )

        setCity("")
        setStartDate("")
        setEndDate("")

    }

    return(
        <div>
            <h2>여행 예약</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>도시 선택 : </label>
                    <select value={city} onChange={(e)=>setCity(e.target.value)}>
                        <option value=''>::도시::</option>
                        <option value="서울">서울</option>
                        <option value="제주도">제주도</option>
                        <option value="부산">부산</option>
                    </select>
                </div>

                <div>
                    <label>출발 날짜 : </label>
                    <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>

                <div>
                    <label>도착 날짜: </label>
                    <input type="date" value={endDate} onChange={(e) =>setEndDate(e.target.value)}/>
                </div>

                <div>
                    {
                        startDate && endDate &&(
                            <>
                            {startDate} ~ {endDate}<br/>
                            일정: {getDays()}
                            </>
                        )
                    }
                </div>
                <button type="submit">예약하기</button>
            </form>
            {
                open &&<Payment />
            }
        </div>
    )
}