import React from "react";
import { Link } from "react-router-dom";
import "./Mainseviecs.css";

const Mainsevieces = () => {
    return(
        <div>
            <div>
                <h1>고객센터</h1>
                <div>여행 관련 도움이나 궁금한 점이 있으신가요? 고객센터에서 확인해 보세요. </div>
            </div>

            <div>
                <h3>공지사항</h3>
                <p>여행 및 고객센터 관련 주요 공지사항을 확인하세요.</p>
                <Link to='/CustomerService/notice'>공지사항 더보기</Link>
            </div>

            <div>
                <h3>Q&A</h3>
                <p>자주 묻는 질문을 확인하고 궁금증을 해결해 보세요</p>
                <Link to='/CustomerService/qna'>자주 묻는 질문 더보기</Link>
            </div>

            <div>
                <h3>문의하기</h3>
                <p>궁금한 점을 문의하시면 원활하게 답변해 드리겠습니다</p>
                <Link to='/CustomerService/inquirymail'>문의하기</Link>
            </div>


            <div>
                <h1>자주 묻는 질문</h1>
            </div>

            

        </div>

       
    )
}
export default Mainsevieces