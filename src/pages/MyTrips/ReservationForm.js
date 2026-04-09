import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { KoreaList } from "../../Packages/KoreaList";
import { PackageDetail } from "../../Packages/PackageDetail";
import useWebStore from "../../Store/useWebStore";
import './ReservationForm.css'



export default function ReservationForm() {

    const navigate = useNavigate();
    const [cnt, setCnt] = useState(1)

    const location = useLocation()
    const selTrip = location.state?.selTrip

    const { loginUser, addReservation } = useWebStore()

    const cityData = KoreaList.find((item) => item.id === selTrip?.id)
    const detailData = PackageDetail.find((item) => item.id == selTrip?.id)

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

    const getDays = () => {
        if (!startDate || !endDate) {
            return ''
        }

        const start = new Date(startDate)
        const end = new Date(endDate)

        const diff = (end - start) / (1000 * 60 * 60 * 24)

        if (diff < 0) {
            return '날짜를 다시 선택하세요'
        }

        if (diff == 0) {
            return '당일여행'
        } else {
            return diff + '박 ' + (diff + 1) + '일'
        }
    }

    const prePrice = selTrip ? Number(selTrip.price.replace(/~/, "").replace(/,/g, "").replace(/₩/, "")) * cnt : 0

    const formattedPrePrice = prePrice.toLocaleString();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!loginUser) {
            alert('로그인이 필요합니다.')
            navigate('/LoginPage')
            return;
        }

        if (!selTrip) {
            alert("잘못된 접근입니다");
            return;
        }

        const totalprice = Number(selTrip.price.replace(/~/, "").replace(/,/g, "").replace(/₩/, "")) * cnt;

        const formattedPrice = totalprice.toLocaleString()

        const newReservation = {
            id: Date.now(),
            packid: selTrip.id,
            userId: loginUser.id,
            userName: loginUser.name,
            title: selTrip?.title || city + '여행',
            image: selTrip.image,
            destination: city,
            startDate: startDate,
            endDate: endDate,
            days: getDays(),
            people: cnt,
            price: formattedPrice
        }


        addReservation(newReservation)
        navigate(`/MyTrips/reserve/payment/${newReservation.id}`);
        // alert(
        //     "예약완료\n"+
        //     "상품명 : "+(selTrip?.title || "")+"\n" +
        //     "도시 : "+city+"\n" +
        //     "출발날짜 : "+startDate+"\n" +
        //     "도착날짜 : "+endDate+"\n" +
        //     "일정 : "+getDays()+"\n"+
        //     "인원수 : " + cnt + "명\n" +
        //     "가격 : ₩" + formattedPrice
        // )

        setCity("")
        setStartDate("")
        setEndDate("")

    }

    return (
        <div className="trip-reservation-main">
            <div>
                <h2>Trip Reservation</h2>
            </div>


            <form onSubmit={handleSubmit}>
                <div className="trip-reservation-group">
                    <label>도시</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} readOnly />
                </div>

                <div className="trip-reservation-group">
                    <label>이름</label>
                    <input value={loginUser.name || ''} readOnly />
                </div>

                <div className="trip-reservation-group">
                    <label>출발 날짜</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} readOnly />
                </div>

                <div className="trip-reservation-group">
                    <label>도착 날짜</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} readOnly />
                </div>

                <div className="trip-reservation-group">
                    <label>인원수</label>
                    <div className="count-box">
                        <button type="button" onClick={() => setCnt((prev) => Math.max(1, prev - 1))}>-</button>

                        <span>{cnt}</span>

                        <button type="button" onClick={() => setCnt((prev) => Math.min(10, prev + 1))}>+</button>
                    </div>
                </div>

                <div className="trip-reservation-group">
                    <label>총 가격</label>
                    <span>₩ {formattedPrePrice}</span>
                </div>

                <div className="trip-reservation-group-full">
                    <label>여행 일정</label>
                    <div>
                        {
                            startDate && endDate && (
                                <>
                                    {startDate} ~ {endDate}({getDays()})
                                     
                                </>
                            )
                        }
                    </div>
                </div>
                <button type="submit" className="trip-reservation-submit-btn">예약하기</button>
            </form>

        </div>
    )
}