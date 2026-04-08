import React, { useContext, useEffect, useState } from "react";

import Payment from "./Payment";

import { useLocation } from "react-router-dom";
import { KoreaList } from "../../Packages/KoreaList";
import { PackageDetail } from "../../Packages/PackageDetail";
import useWebStore from "../../Store/useWebStore";


export default function ReservationForm(){
    const [open,setOpen]=useState(false);
    const [selectreservation,setSelectRervation] =useState(null);
    

    const location=useLocation()
    const selTrip=location.state?.selTrip

    const { loginUser, addReservation } = useWebStore()

    const cityData = KoreaList.find((item)=>item.id===selTrip?.id)
    const detailData=PackageDetail.find((item)=>item.id==selTrip?.id)

    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        if (cityData) {
            setCity(cityData.city || "");
        }
        if (detailData) {
            setStartDate(detailData.dates[0].departureDate || "");
            setEndDate(detailData.dates[0].arrivalDate || "");
        }
    }, [cityData, detailData])

    const getDays=()=>{
        if(!startDate || !endDate){
            return ''
        }

        const start=new Date(startDate)
        const end=new Date(endDate)

        const diff=(end-start)/ (1000*60*60*24)

        if(diff<0){
            return '날짜를 다시 선택하세요'
        }

        if(diff==0){
            return '당일여행'
        }else{
            return diff+'박 '+(diff+1)+'일'
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if (!selTrip) {
            alert("잘못된 접근입니다");
            return;
        }
        // 인원수 cnt로 설정함 누나 편하신 대로 인원수 만들어주시면 되요.. 그리고
        // price는 문자열 제거해서 숫자만 출력되게 만들어놓았습니다. 
        const cnt=2;
        const totalprice=selTrip.price.replace(/~/,"").replace(/,/,"").replace(/₩/,"")*cnt;

        const newReservation={
            id: Date.now(),
            packid: selTrip.id,
            userId: loginUser.id,
            userName: loginUser.name,
            title: selTrip?.title || city+'여행',
            destination: city,
            startDate: startDate,
            endDate: endDate,
            days: getDays(),
            price: totalprice|| ''
        }

        setSelectRervation(newReservation)
        addReservation(newReservation)

        setOpen(true)

        alert(
            "예약완료\n"+
            "상품명 : "+(selTrip?.title || "")+"\n" +
            "도시 : "+city+"\n" +
            "출발날짜 : "+startDate+"\n" +
            "도착날짜 : "+endDate+"\n" +
            "일정 : "+getDays()
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
                    <label>도시 : </label>
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>

                <div>
                    <label>출발 날짜 : </label>
                    <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
                </div>

                <div>
                    <label>도착 날짜: </label>
                    <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
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
                open &&<Payment reservation={selectreservation} setOpen={setOpen}/>
            }
        </div>
    )
}