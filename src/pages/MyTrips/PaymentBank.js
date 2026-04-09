import React, { useEffect } from "react";
import { useState } from "react";
import "./PaymentBank.css";

export default function PaymentBank({ setBank, bmsg, busermsg, bnummsg }) {
    const [brand, setBrand] = useState('');
    const [user, setUser] = useState('');
    const [banknum, setBankNum] = useState('');  
    useEffect(() => {
        setBank(bankinfo)
    },[brand,user,banknum])
    const bankinfo ={
        brand: brand,
        user: user,
        banknum:banknum
    }


    const banklist = [
        { value: 'KB', name: '국민 은행' },
        { value: 'IBK', name: 'IBK' },
        { value: 'BNK', name: 'BNK은행' },
        { value: 'Kakao', name: '카카오 뱅크' },
       
    ]

   const Banklistradio = () => {
  return banklist.map((item) => (
    <div className="payment-bank-item" key={item.value}>
      <input
        className="payment-bank-radio"
        type="radio"
        name="bank"
        value={item.value}
        onChange={(e) => { setBrand(e.target.value) }}
      />

      <div
        className={`payment-bank-logo-circle ${
          item.value === "KB"
            ? "bank-kb"
            : item.value === "IBK"
            ? "bank-ibk"
            : item.value === "BNK"
            ? "bank-bnk"
            : "bank-kakao"
        }`}
      >
        <span className="payment-bank-logo-text">{item.value}</span>
      </div>

      <span className="payment-bank-name">{item.name}</span>
    </div>
  ))
}

    return (
        <div className="payment-bank-wrap">
            <div className="payment-bank-title">은행/계좌 선택</div>
            
            <div className="payment-bank-list">
                {Banklistradio()}
            </div>

            <div className="payment-bank-error">{bmsg}</div>
            <div className="payment-bank-label">예금주</div>
            <input className="payment-bank-user-input" 
                   size={3} 
                   value={user} 
                   placeholder="예금주" 
                   onChange={(e) => { setUser(e.target.value) }} />
            <div className="payment-bank-error">{busermsg}</div>
            <div className="payment-bank-label">계좌 번호</div>
            <input className="payment-bank-number-input"
                   size={7} 
                   value={banknum} 
                   onChange={(e) => { setBankNum(e.target.value) }} /> 
            <div className="payment-bank-error">{bnummsg}</div>           
        </div>
    )
}
