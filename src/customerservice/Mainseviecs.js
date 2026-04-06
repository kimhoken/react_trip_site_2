import React from "react";
import { Link } from "react-router-dom";

const Mainsevieces = () => {
    return(
        <div>
            <Link to='/CustomerService/qna'>Q&A</Link>
            <Link to='/CustomerService/notice'>공지사항</Link>
        </div>
    )
}
export default Mainsevieces