import React from "react";
import ReviewList from "./List/ReviewList";
import useWebStore from "../Store/useWebStore";
import { useNavigate } from "react-router-dom";

export default function Review(){

    const navigate = useNavigate();

    const {posts} = useWebStore();

    const reviewPosts = posts.filter((item)=>(item.type === '여행 후기'))


    return(
        <>
            {
                reviewPosts.map((item) => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td onClick={()=>navigate('/Board/'+item.id)}
                            style={{cursor:'pointer'}}>
                            {item.title}</td>
                        <td>{item.writer}</td>
                        <td>{item.date}</td>
                    </tr>
                ))
            }
        </>
    )
}