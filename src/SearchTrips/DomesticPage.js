import React, { useState } from "react";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { Link } from "react-router-dom";
import './DomesticPage.css';

const DomesticPage = () => {
    const [category, setCategory] = useState('');
    const [active, setActive] = useState('');

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
        { label: '전체', value: '' },
        { label: '수도권', value: '수도권' },
        { label: '강원', value: '강원' },
        { label: '충청', value: '충청' },
        { label: '전라', value: '전라' },
        { label: '경상', value: '경상' },
        { label: '제주', value: '제주' }
    ];

    const showcategory = () => {
        {
            return region.map((i) => {
                return (
                    <p onClick={() => { setCategory(i.value); setActive(i.value) }}
                        className={active == i.value ? "active" : ""}
                    >{i.label}</p>
                )
            })
        }
    }


    return (
        <div className="Domestic-main">

            <div className="Domestic-result">
                <h2>국내 여행 패키지</h2>
                <div className="Domestic-show">
                    {showcategory()}
                </div>
                <ul>
                    {showlist()}
                </ul>

            </div>
        </div>
    )
}
export default DomesticPage
