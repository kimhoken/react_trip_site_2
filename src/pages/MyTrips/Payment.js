import react, { useState } from "react";
import useWebStore from "../../Store/useWebStore";
import PaymentCard from "./PaymentCard";
import PaymentBank from "./PaymentBank";
import './Payment.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Payment = () => {

    const navigate = useNavigate();
    const { loginUser, addPayment, reservations } = useWebStore();
    const { id } = useParams();
    const [paymentmethod, setPaymentMethod] = useState('');
    const [card, setCard] = useState({
        company: '', period: { year: '', month: '' }, cardnum: ['', '', '', '']
    });
    const [bank, setBank] = useState({
        brand: '', user: '', banknum: ['', '']
    });
    const [cardmsg, setCardmsg] = useState('');
    const [cardexdmsg, setCardexdmsg] = useState('');
    const [cardnummsg, setCardnummsg] = useState('');
    const [bmsg, setBmsg] = useState('');
    const [busermsg, setBusermsg] = useState('');
    const [bnummsg, setBnummsg] = useState('');
    const [active, setActive] = useState('');
    const paymentlist = [
        { name: '신용 카드', value: 'card' },
        { name: '계좌 이체', value: 'bank' },
        { name: 'NPAY', value: 'npay' },
        { name: 'KAKAO PAY', value: 'kakaopay' },
    ]

    const currentreservation = reservations.find(item => item.id == id);

    const showmethod = () => {
        {
            return paymentlist.map((item) => {
                return (
                    <div>
                        <p onClick={(e) => { setPaymentMethod(item.value); setActive(item.value) }}
                            className={active == item.value ? 'active' : ''}>{item.name}</p>
                        <hr />
                        {
                            active === item.value && (
                                <div>
                                    {PaymentselectForm()}

                                </div>
                            )
                        }
                    </div>
                )
            })
        }
    }

    const checkcard = () => {
        let vailed = false;
        const regex = /^\d{4}$/;
        if (!card.company) {
            setCardmsg('카드 선택하세요');
            vailed = true;

        } else {
            setCardmsg('');
        }
        if (!card.period.year || !card.period.month) {
            setCardexdmsg('유효기한 기입하세요')
            vailed = true;
        } else {
            setCardexdmsg('');
        }

        for (let i = 0; i < card.cardnum.length; i++) {
            if (!regex.test(card.cardnum[i])) {
                setCardnummsg('카드번호는 네자리여야 합니다.')
                vailed = true;
            } else {
                setCardnummsg('');
            }
        }
        if (vailed) {
            return false;
        } else {
            return true;
        }
    }
    const checkbank = () => {
        const regex = /^\d{10,14}$/;
        let vaild = false;
        if (!bank.brand) {
            setBmsg('은행을 선택하세요')
            vaild = true;
        } else {
            setBmsg('');
        }
        if (!bank.user) {
            setBusermsg('예금주 입력하세요')
            vaild = true;
        } else {
            setBusermsg('');
        }
        if (!bank.banknum) {
            setBnummsg('계좌번호를 입력하세요.')
            vaild = true;
        } else {
            setBnummsg('');
        }
        if (!regex.test(bank.banknum.replace(/-/g, ''))) {
            setBnummsg('계좌번호 10~14자리입니다.')
            vaild = true;
        } else {
            setBnummsg('');
        }
        if (vaild) {
            return false
        } else {
            return true;
        }
    }

    const onSubmit = (e) => {

        e.preventDefault();

        const payments = {
            id: Date.now(),
            paymentmethod: paymentmethod,
            reservationId: currentreservation.id,
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
            if (!checkbank()) return;
            payments.bank = bank.brand;
            payments.user = bank.user;
        }
        addPayment(payments);

        alert('결제가 완료 되었습니다.');
        navigate(`/MyTrips/reservations`);


    }

    const PaymentselectForm = () => {
        if (paymentmethod == 'card') {
            return (
                <PaymentCard setCard={setCard} cardexdmsg={cardexdmsg} cardmsg={cardmsg} cardnummsg={cardnummsg} />
            )
        } else if (paymentmethod == 'bank') {
            return (
                <PaymentBank setBank={setBank} bmsg={bmsg} busermsg={busermsg} bnummsg={bnummsg} />
            )
        }
    }

    return (
        <div className="payment-main">
            <div className="payment-title">
                <h2>결제창</h2>
            </div>
            <div className="pay-main">
                <div className="payment-left-layer">
                    <p className="pay-title">예약자</p>
                    <div className="payment-user">
                        <p>{loginUser.name}</p>
                        <p>전화번호: {loginUser.phone}</p>
                        <p>이메일: {loginUser.email}</p>
                    </div>
                    <p className="pay-title">패키지 예약</p>
                    <div className="payment-package">
                        <p><img src={currentreservation.image} /></p>
                        <div>
                            <p>패키지: {currentreservation.title} </p>
                            <p>출발일: {currentreservation.startDate} </p>
                            <p>도착일: {currentreservation.endDate} </p>
                        </div>
                    </div>
                </div>
                <div className="payment-right-layer">
                    <p className="pay-title">결제수단</p>
                    <form onSubmit={onSubmit}>
                        <div className="payment-section">
                            <div className="paymentmethod">
                                {showmethod()}
                            </div>
                        </div>
                        <div className="payment-pay">
                            <p>인원수: {currentreservation.people}</p>
                            <p>총가격: {currentreservation.price}원 </p>
                            <button type="submit">결제하기</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Payment