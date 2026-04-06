import React, { useEffect } from "react";
import { useState } from "react";

export default function PaymentBank({ setBank}) {
    const [brand, setBrand] = useState('');
    const [user, setUser] = useState('');
    const [banknum1, setBankNum1] = useState('');
    const [banknum2, setBankNum2] = useState('');
    useEffect(() => {
        setBank(bankinfo)
    },[brand,user])
    const bankinfo ={
        brand: brand,
        user: user,
        banknum:{ banknum1:banknum1, banknum2:banknum2 }
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
            <p>은행/계좌 선택</p>
            {Banklistradio()}
            <p>예금주</p>
            <input size={3} value={user} placeholder="예금주" onChange={(e) => { setUser(e.target.value) }} />
            <p>계좌 번호</p>
            <input size={7} value={banknum1} onChange={(e) => { setBankNum1(e.target.value) }} />-
            <input size={7} value={banknum2} onChange={(e) => { setBankNum2(e.target.value) }} />
        </div>
    )
}
