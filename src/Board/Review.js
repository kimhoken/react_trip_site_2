import React from "react";
import ReviewList from "./List/ReviewList";

export default function Review(){
    return(
        <>
            {
                ReviewList.map((item, index) => (
                    <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.title}</td>
                        <td>{item.writer}</td>
                        <td>{item.date}</td>
                        <td>{item.view}</td>
                    </tr>
                ))
            }
        </>
    )
}