import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PackageList } from "./PackageList";
import { DomesticPackageList } from "./DomesticPackageList";

const Packageinfo = () => {
    const [count,setCount] = useState(1);
    const { id } = useParams();
    const showlist = () => {
        let result = id<100?PackageList:DomesticPackageList;
        
        if (id.trim()) {
            result = result.find((item) => item.id == id)
        }
        return result;
    }
    const item = showlist();
    const priceNumber =Number(String(item.price).replaceAll(',','').replaceAll('₩','').replaceAll('~',''));

    return (
        <div className="packageinfo-main">

            <div><img src={item.image} width={'200px'} height={'200px'} /></div>
            <div className="text-line">
                <div><h2>{item.title}</h2></div>
                <div>가격: {item.price}</div>
                <div>나라: {item.country}</div>
                <div>[국내/해외]: {item.type}</div>
                <div>평점: {item.rating}</div>
                <div>리뷰수: {item.reviewCount}</div>
                
            </div>
            <div className="reservation-box">
                <h3>인원수</h3>
                <p className="people-button">성인
                    <p onClick={()=>{setCount(count-1)}}>-</p>
                    <p>{count}</p>
                    <p onClick={()=>{setCount(count+1)}}>+</p>
                </p>
                <p>총가격: {priceNumber*count} 원</p>
                <Link to={'/MyTrips/ReservationForm/'+item.id+'/'+count}><p>예약하기</p></Link>
            </div>


        </div>
    )
}


export default Packageinfo