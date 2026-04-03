import React from "react";
import { useNavigate } from "react-router-dom";

export default function FavoriteItem({item,onDelete}){

    const navigate = useNavigate()

    return(
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
             onClick={() => navigate('/MyTrips/reserve',{state:{selTrip:item}})}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.place}
            <button onClick={(e)=>{e.stopPropagation();onDelete(item.id)}}>삭제</button>
            <img src={item.image} alt={item.name}/>
        </div>
    )
}