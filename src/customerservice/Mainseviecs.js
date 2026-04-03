import React from "react";
import { Link } from "react-router-dom";

const Mainsevieces = () => {
    return(
        <div>
            <Link to='/CustomerService/sub1'>Q&A</Link>
            <Link to='/CustomerService/sub2'>공지사항</Link>
        </div>
    )
}
export default Mainsevieces