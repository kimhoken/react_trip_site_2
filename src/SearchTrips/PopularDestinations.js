import React, { useState } from "react";
import { PackageList } from "../Packages/PackageList";
import { Link } from "react-router-dom";

const PopularDestinations = () => {
    const [category, setCategory] = useState('');
    const regin = [
        {locate:'유럽', contient:'Europe'}, {locate:'북중미',contient:'America'},
        {locate:'아시아',contient:'Asia'}
    ];
    const showcategory = () => {
        {
            return regin.map((i) => {
                return (
                    <p onClick={() => { setCategory(i.contient) }}>{i.locate}</p>
                )
            })
        }
    }

    const showlist = () => {
        let list = PackageList;

        list = list.filter((item) => item.rating >= 4.0 && item.reviewCount > 10 
        && item.contient == category)
        {
            return list.map((item) => {
                return (
                    <Link to={'/Packages/' + item.type + '/' + item.contient + '/' + item.country + '/' + item.id}>
                    <li>
                        <img src={item.image} width={'100px'} height={'100px'} />
                        <h3>{item.title}</h3>
                        <p>가격: {item.price}</p>
                        <p>평점: {item.rating}</p>
                        <p>리뷰수: {item.reviewCount}</p>                        
                    </li>
                    </Link>
                )
            }

            )
        }
    }

    return (
        <div PopularDestination-main>
            <div>
                <header>
                    <h2>해외 패키지</h2>
                    <nav className="conutry-list">
                        {showcategory()}
                    </nav>
                </header>
                <nav className="conutry-display">
                    <ul>
                        {showlist()}
                    </ul>
                </nav>
            </div>
        </div>
    )
}



export default PopularDestinations