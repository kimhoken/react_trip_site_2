import react, { useState } from "react";
import useWebStore from "../../Store/useWebStore";
import PaymentCard from "./PaymentCard";
import PaymentBank from "./PaymentBank";

const Payment = ({ reservation, setOpen }) => {

    const { loginUser, addPayment } = useWebStore();
    const [paymentmethod, setPaymentMethod] = useState('');
    const [card, setCard] = useState({
        company:'',period:{year:'',month:''},cardnum:{cardnum1:'', cardnum2:'', cardnum3:'', cardnum4:''}
    });
    const [bank, setBank] = useState({});

    const regex=/^\d{4}$/;

    const checkcard = () => {
        if (!card.company) {
            alert('카드 선택하세요');
            return false;
        }
        if (!card.period.year && !card.period.month) {
            alert('유효기한 기입하세요')
            return false;
        }
        for(let i=0;i<card.cardnum.length;i++){
            if(regex.test(card.cardnum[i])){
                alert('카드번호는 네자리여야 합니다.')
                return false;
            }
        }  
        return true;
    }

    const onSubmit = (e) => {

        e.preventDefault();

        const payments = {
            id: Date.now(),
            paymentmethod: paymentmethod,
            reservationId: reservation.id,
            PaymentDate: new Date().toISOString()
        }


        if (!paymentmethod) {
            alert('결제 수단을 선택하세요!!');
            return;
        }
        if (paymentmethod == 'card') {
            if (!checkcard()) return;
            payments.card = card.company;
            payments.period = card.period;
        } else if (paymentmethod == 'bank') {
            
            payments.bank = bank.brand;
            payments.user = bank.user;
        }
        addPayment(payments);

        alert('결제가 완료 되었습니다.');
        setOpen(false);



    }

    const PaymentselectForm = () => {
        if (paymentmethod == 'card') {
            return (
                <PaymentCard setCard={setCard} />
            )
        } else if (paymentmethod == 'bank') {
            return (
                <PaymentBank setBank={setBank} />
            )
        }
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
                <form onSubmit={onSubmit}>
                    <h3>::결제::</h3>
                    <div>
                        <h4>결제수단</h4>
                        <div><input type="radio" value={'bank'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> 무통장 입금 </div>
                        <div><input type="radio" value={'card'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> 카드결제 </div>
                        <div><input type="radio" value={'hevenpay'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> HEAVEN PAY</div>
                        <div><input type="radio" value={'npay'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> Npay </div>
                        <div><input type="radio" value={'kakaopay'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> Kakao pay </div>
                    </div>
                    {PaymentselectForm()}

                    <button type="submit">결제하기</button>

                </form>
            </div>

        </div>
    )
}


export default Payment