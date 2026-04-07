import React from "react";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { Link } from "react-router-dom";
import './DomesticPage.css';

const DomesticPage = () => {

    const showlist = () => {
        let list = DomesticPackageList;

        list = list.filter((item) => item.rating >= 4.0 && item.reviewCount > 20
            && item.type == 'domestic')

        {

            return list.map((item) => {
                return (
                    <Link to={'/Packages/' + item.type + '/' + item.contient + '/' + item.country + '/' + item.id}>
                        <li>
                            <div>
                                <img src={item.image} />
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <div>평점: {item.rating}</div>
                                <div>리뷰수: {item.reviewCount}</div>
                            </div>
                            <div>
                                <div>가격: {item.price}</div>
                            </div>
                        </li>
                    </Link>

                )
            })

        }
    }


    return (
        <div className="Domestic-main">
            <h2>국내 여행 패키지</h2>
            <ul>
                {showlist()}
            </ul>

        </div>
    )
}
export default DomesticPage
