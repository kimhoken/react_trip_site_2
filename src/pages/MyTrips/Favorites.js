import React, { useEffect, useState } from "react";
import FavoriteItem from "../../components/FavoriteItem";
import './Favorites.css';
import useWebStore from "../../Store/useWebStore";
import { useNavigate } from "react-router-dom";

export default function Favorites(){

    const [data,setData]=useState([])
    const navigate = useNavigate()
    const { loginUser } = useWebStore()

    useEffect(() => {
        if (!loginUser) {
            setData([]);
            return;
        }

        const key = `favorites_${loginUser.id}`
        const save = localStorage.getItem(key)
    
        if (save) {
            setData(JSON.parse(save))
        } else {
            setData([])
        }
        }, [loginUser])

    const delFavorit=(id)=>{
        const update=data.filter((item)=>item.id !== id)
        setData(update)
        const key = `favorites_${loginUser.id}`
        localStorage.setItem(key, JSON.stringify(update))
    }

    if (!loginUser) {
        return (
            <div className="mypage-login-error">
                <h2>로그인 정보가 없습니다.</h2>
                <button
                    className="goto-login"
                    onClick={() => navigate("/LoginPage")}
                >
                    로그인 하러가기
                </button>
            </div>
        );
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