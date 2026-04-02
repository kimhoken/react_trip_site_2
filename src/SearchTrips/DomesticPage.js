import React from "react";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { Link } from "react-router-dom";

const DomesticPage = () => {

    const showlist = () => {
        let list = DomesticPackageList;

        list = list.filter((item) => item.rating >= 4.0 && item.reviewCount > 20
            && item.type == 'domestic')

        {

            return list.map((item) => {
                return (
                    <Link to={'/SearchTrips/PackageInfo/' + item.id}>
                        <li>
                            <img src={item.image} width={'100px'} height={'100px'} />
                            <h3>{item.title}</h3>
                            <p>가격: {item.price}</p>
                            <p>평점: {item.rating}</p>
                            <p>리뷰수: {item.reviewCount}</p>
                        </li>
                    </Link>

                )
            })

        }
    }


    return (
        <div>
            <h2>국내 여행 패키지</h2>
            <ul>
            {showlist()}
            </ul>

        </div>
    )
}
export default DomesticPage
