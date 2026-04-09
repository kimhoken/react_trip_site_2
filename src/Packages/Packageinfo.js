import { Link, useNavigate, useParams } from "react-router-dom";
import { PackageList } from "./PackageList";
import { DomesticPackageList } from "./DomesticPackageList";
import { PackageDetail } from "./PackageDetail";
import { PackageSchedule } from "./PackageSchedule";
import useWebStore from "../Store/useWebStore";
import './Packageinfo.css';
import { useState } from "react";

const Packageinfo = () => {

    const { loginUser } = useWebStore();
    const { id } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const showlist = () => {
        let list = id < 100 ? PackageList : DomesticPackageList;
        list = list.find((item) => item.id == id);
        const detail = PackageDetail.find((item) => item.id == id)
        const schedule = PackageSchedule.find((item) => item.id == id)

        return { list, detail, schedule };
    }

    const show = () => {
        {
            return item.schedule.schedule.map((i) => {
                return (
                    <tr>
                        <td>{i.day}일차</td>
                        <td>{i.title}</td>
                        <td>{i.detail}</td>
                    </tr>
                )
            })
        }
    }

    const item = showlist();
    const navigate = useNavigate();
    const dates = item.detail.dates;

    const loginEvent = (e) => {
        if (!loginUser) {
            e.preventDefault();
            alert("로그인이 필요합니다.");
            navigate("/LoginPage");
            return;
        }
        navigate("/MyTrips/reserve", { state: { selTrip: item.list } })
    }

    return (
        <div className="packageinfo-main">
            <div className="package-header">
                <div className="package-img">
                    <img src={item.list.image} />
                </div>

                <div className="packageinfo">
                    {item.list.isPopular && (
                        <span className="package-badge">인기상품</span>
                    )}
                    <h2>{item.list.title}</h2>
                    <p>{item.detail.summary}</p>
                    <hr />
                    <div className="packageinfo-box">
                        <div className="package-pricemain">
                        
                            <div className="package-price">{item.list.price}<span>/1인</span></div>
                            
                        </div>

                        <div className="package-rating">
                            <div><span>★ </span>{item.list.rating} ({item.list.reviewCount})</div>
                        </div>
                        <div className="package-rating">
                            <div>{item.list.country.kr},{item.list.city.kr}</div>
                        </div>
                        <div className="package-rating">
                            {item.detail.duration}
                        </div>
                    </div>

                    <hr />
                    <div className="package-detail">
                        <h3>여행 상세 정보</h3>
                        <div className="package-date-row">
                            <label>
                            출발일:
                            </label>
                            <select
                                onChange={(e) => setSelectedIndex(e.target.value)}
                                value={selectedIndex}
                            >
                                {dates.map((date, index) => (
                                    <option key={index} value={index}>
                                        {date.departureDate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="package-date-row">
                            <label>
                                도착일:
                            </label>
                             {dates[selectedIndex].arrivalDate}
                        </div>

                        <div className="package-date-row">
                            <label>
                                여행 기간
                            </label>
                            <div> {item.detail.duration}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="package-schedule">
                <h3>상세일정</h3>
                <table >
                    <thead>
                        <tr>
                            <th>일차</th>
                            <th>일정</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>{show()}</tbody>
                </table>
            </div>
            <div className="package-actions">
                <div className="package-action-text">
                    <button className="reserve-btn" onClick={loginEvent}>
                        예약하기
                    </button>         
   
                </div>


            </div>
        </div>
    )
}


export default Packageinfo