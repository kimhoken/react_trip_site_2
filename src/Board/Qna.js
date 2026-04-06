import React from "react";
import QnaList from './List/QnaList'

export default function Qna(){

    return(
        <>
            {
                QnaList.map((item, index) => (
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