import React, { useEffect, useState } from "react";
import FavoriteItem from "../../components/FavoriteItem";
import './Favorites.css';

export default function Favorites(){

    const [data,setData]=useState([])

    useEffect(()=>{
        const save=localStorage.getItem("favorites")

        if (save) {
            setData(JSON.parse(save))
        }
    },[])

    const delFavorit=(id)=>{
        const update=data.filter((item)=>item.id !== id)
        setData(update)
        localStorage.setItem("favorites",JSON.stringify(update))
    }

    return(
        <div className="fawrap">
            <h2 className="fatitle">즐겨찾기</h2>
            {data.length === 0 ? (<p className="nofa">즐겨찾기 항목이 없습니다.</p>):
                (
                <div className="faList">
                {
                    data.map((item)=>(
                        <FavoriteItem item={item} onDelete={delFavorit}/>
                    ))
                }
                </div>
            )}
        </div>
    )
}