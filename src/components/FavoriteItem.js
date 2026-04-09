import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/MyTrips/Favorites.css"

export default function FavoriteItem({item,onDelete}){

    const navigate = useNavigate()

    return(
        <div className="faItem" onClick={() => navigate('/MyTrips/reserve',{state:{selTrip:item}})}>

            <img src={item.image} alt={item.title} className="faImg"/> 

            <div className="faInfo">
                <h3>{item.title}</h3>
                <p>나라 : {item.country}</p>
                <p>가격: {item.price}</p>
                <p>평점: {item.rating}</p>
            </div>
            
            <button  className="faBtn" onClick={(e)=>{e.stopPropagation();onDelete(item.id)}}>삭제</button>
        </div>
    )
}