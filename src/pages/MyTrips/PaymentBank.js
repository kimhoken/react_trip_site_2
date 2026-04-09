import React, { useEffect } from "react";
import { useState } from "react";

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
        { value: 'Kakobank', name: '카카오 뱅크' },
       
    ]

    const Banklistradio = () => {
        {
            return banklist.map((item) => (
                <div>
                    <input type="radio" name="bank" value={item.value} onChange={(e) => { setBrand(e.target.value) }} />
                    {item.name}
                </div>
            ))
        }
    }

    return (
        <div>
            <div>은행/계좌 선택</div>
            {Banklistradio()}
            <div>{bmsg}</div>
            <div>예금주</div>
            <input size={3} value={user} placeholder="예금주" onChange={(e) => { setUser(e.target.value) }} />
            <div>{busermsg}</div>
            <div>계좌 번호</div>
            <input size={7} value={banknum} onChange={(e) => { setBankNum(e.target.value) }} /> 
            <div>{bnummsg}</div>           
        </div>
    )
}
