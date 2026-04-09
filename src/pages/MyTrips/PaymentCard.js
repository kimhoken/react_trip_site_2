import React, { useEffect, useState } from "react";
import './PaymentCard.css';


export default function PaymentCard({ setCard, cardexdmsg, cardmsg, cardnummsg }) {
    const [cardcompany, setCardCompany] = useState('');
    const [year, setYear] = useState('');
    const [cardnum1, setCardnum1] = useState('');
    const [cardnum2, setCardnum2] = useState('');
    const [cardnum3, setCardnum3] = useState('');
    const [cardnum4, setCardnum4] = useState('');
    const [month, setMonth] = useState('');


    useEffect(() => {
        let ischeck =
            year || month || cardcompany || cardnum1 || cardnum2 || cardnum3 || cardnum4;
        if (ischeck) {
            setCard(cardinfo)
        }

    }
        , [year, month, cardcompany, cardnum1, cardnum2, cardnum3, cardnum4]
    )
    const cardcompanylist = [
        { value: '', name: '::카드사 선택::' },
        { value: 'hana', name: '하나' },
        { value: 'KB', name: '국민' },
        { value: 'Woori', name: '우리' },
        { value: 'NH', name: '농협' },
        { value: 'Shin h', name: '신협' },
        { value: 'IBK', name: 'IBK' },
        { value: 'Samsung', name: '삼성' },
        { value: 'Shinhan', name: '신한' },
    ]

    const showcompany = () => {
        {
            return cardcompanylist.map((i) => {
                return (
                    <option value={i.value}>{i.name}</option>
                )
            })
        }
    }

    const cardinfo = {
        company: cardcompany,
        period: { year: year, month: month },
        cardnum: [cardnum1, cardnum2, cardnum3, cardnum4]
    }

    return (
        <div className="card-main">
            
            <form className="card-select">
                <label>
                    <select value={cardcompany} onChange={(e) => { setCardCompany(e.target.value) }}>
                        {showcompany()}
                    </select>
                    <div className="errormsg">{cardmsg}</div>
                </label><br/>
                <label><div>카드번호</div>
                    <input placeholder="1111" maxLength={4} size={4} onChange={(e) => { setCardnum1(e.target.value) }} />
                    -<input type="password" placeholder="●●●●" size={4} maxLength={4} onChange={(e) => { setCardnum2(e.target.value) }} />
                    -<input placeholder="3333" size={4} maxLength={4} onChange={(e) => { setCardnum3(e.target.value) }} />
                    -<input type="password" size={4} placeholder="●●●●" maxLength={4} onChange={(e) => { setCardnum4(e.target.value) }} />
                    <div className="errormsg">{cardnummsg}</div>
                </label>
                <br/>
                <label>
                    <div>유효 기간</div>
                    <input size={1} maxLength={2} onChange={(e) => { setMonth(e.target.value) }} placeholder="월" />/
                    <input size={1} maxLength={2} onChange={(e) => { setYear(e.target.value) }} placeholder="년" />
                    <div className="errormsg">{cardexdmsg}</div>
                </label>
            </form>
        </div>
    )


}