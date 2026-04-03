import { Link, useParams } from "react-router-dom";
import { PackageList } from "./PackageList";
import { DomesticPackageList } from "./DomesticPackageList";
import { PackageDetail } from "./PackageDetail";
import { PackageSchedule } from "./PackageSchedule";

const Packageinfo = () => {
    
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


    return (
        <div className="packageinfo-main">

            <div><img src={item.list.image} width={'200px'} height={'200px'} /></div>
            <div className="text-line">
                <div><h2>{item.list.title}</h2></div>
                <div>가격: {item.list.price}</div>
                <div>나라: {item.list.country}</div>                
                <div>평점: {item.list.rating}</div>
                <div>리뷰수: {item.list.reviewCount}</div>

            </div>
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
            <div className="reservation-box">
                {/* <h3>인원수</h3>
                <p className="people-button">성인
                    <p onClick={() => { count > 0 ? setCount(count - 1) : setCount(0) }}>-</p>
                    <p>{count}</p>
                    <p onClick={() => { setCount(count + 1) }}>+</p>
                </p>    onClick={()=>window.open('/MyTrips/Payment','_blank')}
                <p>총가격: {priceNumber * count} 원</p> */}
                <Link to='/MyTrips/reserve' state={{selTrip:item}}><p >예약하기</p></Link>
                {item.list.type ==='domestic'? 
                <Link to={'/Packages/DomesticPage'}><p>뒤로가기</p></Link>:
                <Link to={'/Packages/OverseasPage'}><p>뒤로가기</p></Link>}
            </div>


        </div>
    )
}


export default Packageinfo