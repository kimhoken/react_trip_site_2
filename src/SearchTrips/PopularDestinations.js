import React, { useState } from "react";
import { PackageList } from "../Packages/PackageList";

const PopularDestinations = () => {
    const [category, setCategory] = useState('');
    const regin = [
        {locate:'유럽', conuty:'eu'}, {locate:'일본',conuty:'Japan'},
         {locate:'동남아',conuty:'china'}, {locate:'국내',conuty:'Korea'}
    ];
    const showcategory = () => {
        {
            return regin.map((i) => {
                return (
                    <p onClick={() => { setCategory(i.conuty) }}>{i.locate}</p>
                )
            })
        }
    }

    const showlist = () => {
        let list = PackageList;

        list = list.filter((item) => item.rating >= 4.0 && item.reviewCount > 10 
        && item.country == category)
        {
            return list.map((item) => {
                return (

                    <li>
                        <img src={item.img} width={'100px'} height={'100px'} />
                        <p >{item.title}</p>
                        <p>{item.rating}</p>
                        <p>{item.reviewCount}</p>
                        <p>12</p>
                    </li>
                )
            }

            )
        }
    }

    return (
        <div PopularDestination-main>
            <div>
                <header>
                    <h2>추천 여행지</h2>
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