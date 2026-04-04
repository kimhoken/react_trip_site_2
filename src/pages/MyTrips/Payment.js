import react, { useState } from "react";
import useWebStore from "../../Store/useWebStore";

const Payment = ({ reservation }) => {
    const [cardname, setCardname] = useState('');
    const { loginUser } = useWebStore();

    const onSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <div className="payment-header">
                <p>예약할 패키지: {reservation.title} </p>
                <p>출발일: {reservation.startDate} </p>
                <p>도착일: {reservation.endDate} </p>
                <p>인원수: </p>
                <p>총가격: {reservation.price} </p>
            </div>
            <div className="payment-body">
                <p>예약자명:{loginUser.name}</p>
                <p>전화번호:{loginUser.phone}</p>
                <p>이메일:{loginUser.email}</p>

            </div>
            <div className="payment-footer">
                <form onSubmit={()=>{onSubmit()}}>
                    <h3>::결제::</h3>
                    
                    <div>
                    <h4>결제수단</h4>
                    <div><input type="radio" value={'direct'} name="pay"/> 무통장 입금 </div>                    
                    <div><input type="radio" value={'card'} name="pay"/> 카드결제 </div>
                    <div><input type="radio" value={'hevenpay'} name="pay"/> HEAVEN PAY</div>
                    <div><input type="radio" value={'npay'} name="pay"/> npay </div>
                    <div><input type="radio" value={'kakaopay'} name="pay"/> kakao pay </div>
                    </div>
                    {/* <label><h4>카드번호</h4>
                        <input value={cardname} placeholder="1111" onChange={(e) => { setCardname(e.target.value) }} size={'4'} />
                        -<input type="password" placeholder="****" size={'4'} />
                        -<input placeholder="3333" size={'4'} />
                        -<input type="password" placeholder="****" size={'4'} />
                    </label><br /> */}
                                        
                    <button type="submit">결제하기</button>
                    
                </form>
            </div>

        </div>
    )
}


export default Payment