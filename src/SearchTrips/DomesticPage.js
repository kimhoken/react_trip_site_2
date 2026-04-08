import React, { useState } from "react";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { Link } from "react-router-dom";
import './DomesticPage.css';

const DomesticPage = () => {
    const [category,setCategory]=useState('');
    const [active,setActive]=useState('');

    const showlist = () => {
        let list = DomesticPackageList;

        list = list.filter((item) => item.rating >= 4.0 && item.reviewCount > 20
            && (!category || item.contient == category))

        {

            return list.map((item) => {
                return (
                    <li>
                        <Link to={'/Packages/' + item.type + '/' + item.contient + '/' + item.country + '/' + item.id}>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <div> {item.price}</div>
                                <div><span>★</span> {item.rating}({item.reviewCount})</div>
                            </div>
                            
                        </Link>
                    </li>

                )
            })

        }
    }
    const region = [
        { locate: '전체', contient: '' }, { locate: '수도권', contient: 'suduck' }, { locate: '강원', contient: 'kang' },
        { locate: '충청', contient: 'chung' },{locate: '전라', contient:'jeon'},{ locate:'경상', contient:'gyeong'},{locate:'제주',contient:'je'}
    ];

    const showcategory = () => {
        {
            return region.map((i) => {
                return (
                    <p onClick={() => { setCategory(i.contient); setActive(i.contient) }}
                        className={active == i.contient ? "active" : ""}
                    >{i.locate}</p>
                )
            })
        }
    }


    return (
        <div className="Domestic-main">
            <h2>국내 여행 패키지</h2>
            {showcategory()}
            <ul>
                {showlist()}
            </ul>

        </div>
    )
}
export default DomesticPage
