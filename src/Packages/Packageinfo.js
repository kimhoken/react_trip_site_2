import { Link, useNavigate, useParams } from "react-router-dom";
import { PackageList } from "./PackageList";
import { DomesticPackageList } from "./DomesticPackageList";
import { PackageDetail } from "./PackageDetail";
import { PackageSchedule } from "./PackageSchedule";
import useWebStore from "../Store/useWebStore";
import './Packageinfo.css';

const Packageinfo = () => {
    
    const {loginUser} = useWebStore();
    const { id } = useParams();
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
    const priceNumber = Number(String(item.list.price).replaceAll(',', '').replaceAll('₩', '').replaceAll('~', ''));

    const navigate = useNavigate();

    const loginEvent=(e)=>{
        if (!loginUser) {
            e.preventDefault();
            alert("로그인이 필요합니다.");
            navigate("/LoginPage");
            return;
        }
        navigate("/MyTrips/reserve" ,{state: {selTrip:item.list}})
    }

    return (
        <div className="packageinfo-main">
            <div className="packageinfo-header">
            <div className="detail-img"><img src={item.list.image} width={'200px'} height={'200px'} /></div>
            <div className="text-line">
                <div><h2>{item.list.title}</h2></div>                
                <div>가격: {item.list.price}</div>
                <div>나라: {item.list.country}</div> 
                <div>{item.detail.summary}</div>               
                <div><span>★ </span>{item.list.rating} ({item.list.reviewCount})</div>
            </div>
            </div>
            <div className="package-body">
            <div className="text-detail">
                <div>여행 상세 정보</div>
                {
                    item.detail.dates.map((i)=>(
                        <div>출발일:{i.departureDate} 도착일:{i.arrivalDate}</div>
                    ))
                }
                <div>일수 : {item.detail.duration}</div>
            </div>
            <div className="text-schedule">
                <table border={'1'}>
                    <tr>
                        <th>일차</th>
                        <th>일정</th>
                        <th>내용</th>
                    </tr>
                    {show()}
                </table>
            </div>
            </div>

            <div className="reservation-box">                
                <span
                        onClick={loginEvent}><p>예약하기</p></span>
                  {item.list.type ==='domestic'? 
                <Link to={'/Packages/DomesticPage'}><p>뒤로가기</p></Link>:
                <Link to={'/Packages/OverseasPage'}><p>뒤로가기</p></Link>}


            </div>


        </div>
    )
}


export default Packageinfo