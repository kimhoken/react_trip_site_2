import React from "react";
import { useParams } from "react-router-dom";
import { PackageList } from "./PackageList";

const Packageinfo = () => {
    const { id } = useParams();
    const showlist = () => {
        let result = PackageList;
        if (id.trim()) {
            result = result.find((items) => item.id == id)
        }
        return result;
    }
    const item = showlist();


    return (
        <div className="packageinfo-main">

            <div><img src={item.img} width={'200px'} height={'200px'} /></div>
            <div className="text-line">
                <div><h2>{item.title}</h2></div>
                <div>가격: {item.price}</div>
                <div>나라: {item.country}</div>
            </div>


        </div>
    )
}


export default Packageinfo