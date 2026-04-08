import react, { useState } from "react";
import useWebStore from "../../Store/useWebStore";
import PaymentCard from "./PaymentCard";
import PaymentBank from "./PaymentBank";
import './Payment.css';

const Payment = ({ reservation, setOpen }) => {

    const { loginUser, addPayment } = useWebStore();
    const [paymentmethod, setPaymentMethod] = useState('');
    const [card, setCard] = useState({
        company:'',period:{year:'',month:''},cardnum:['', '', '', '']
    });
    const [bank, setBank] = useState({
        brand:'',user:'',banknum:['','']
    });
    const [cardmsg,setCardmsg] = useState('');
    const [cardexdmsg,setCardexdmsg]=useState('');
    const [cardnummsg,setCardnummsg]=useState('');
    const [bmsg,setBmsg] = useState('');
    const [busermsg,setBusermsg] = useState('');
    const [bnummsg,setBnummsg] = useState('');
    const [active,setActive] = useState('');
    const paymentlist=[
        {name:'신용 카드',value:'card'},
        {name:'계좌 이체',value:'bank'},
        {name:'NPAY',value:'npay'},
        {name:'KAKAO PAY',value:'kakaopay'},        
    ]
    const showmethod=()=>{
        {
            return paymentlist.map((item)=>{
                return(
                    <p onClick={(e)=>{setPaymentMethod(item.value); setActive(item.value)}} 
                    className={active==item.value?'active':''}>{item.name}</p>
                )
            })
        }
    }

    const checkcard = () => {
        let vailed=false;
        const regex=/^\d{4}$/;
        if (!card.company) {
            setCardmsg('카드 선택하세요');
            vailed = true;
            
        }else{
            setCardmsg('');
        }
        if (!card.period.year || !card.period.month) {
            setCardexdmsg('유효기한 기입하세요')
            vailed = true;
        }else{
            setCardexdmsg('');
        }
        
        for(let i=0;i<card.cardnum.length;i++){            
            if(!regex.test(card.cardnum[i])){
                setCardnummsg('카드번호는 네자리여야 합니다.')            
                vailed = true;
            }else{
                setCardnummsg('');
            }
        }  
        if(vailed){
            return false;
        }else{
            return true;
        }
    }
    const checkbank = ()=>{
        const regex=/^\d{10,14}$/;
        let vaild =false;
        if(!bank.brand){
            setBmsg('은행을 선택하세요')
            vaild=true;
        }else{
            setBmsg('');
        }
        if(!bank.user){
            setBusermsg('예금주 입력하세요')    
            vaild=true;        
        }else{
            setBusermsg('');
        }
        if(!bank.banknum){
            setBnummsg('계좌번호를 입력하세요.')     
            vaild=true;          
        }else{
            setBnummsg('');
        }
        if(!regex.test(bank.banknum.replace(/-/g,''))){
            setBnummsg('계좌번호 10~14자리입니다.')      
            vaild=true;         
        }else{
            setBnummsg('');
        }
        if(vaild){
            return false
        }else{
            return true;
        }
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
            if(!checkbank()) return;
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
                <PaymentCard setCard={setCard} cardexdmsg={cardexdmsg} cardmsg={cardmsg} cardnummsg={cardnummsg} />
            )
        } else if (paymentmethod == 'bank') {
            return (
                <PaymentBank setBank={setBank} bmsg={bmsg} busermsg={busermsg} bnummsg={bnummsg}/>
            )
        }
    }

    return (
        <div className="modal-window">
            <div className="payment-title">
                <h2>결제창</h2>
                <p>X</p>
            </div>
            <div className="payment-package">
                <p>예약할 패키지: {reservation.title} </p>
                <p>출발일: {reservation.startDate} </p>
                <p>도착일: {reservation.endDate} </p>
                <p>인원수: </p>
                <p>총가격: {reservation.price} </p>
            </div>
            <div className="payment-user">
                <p>예약자명:{loginUser.name}</p>
                <p>전화번호:{loginUser.phone}</p>
                <p>이메일:{loginUser.email}</p>
            </div>

            <div className="payment-section">
                <form onSubmit={onSubmit}>
                    <h3>::결제::</h3>
                    <div className="paymentmethod">
                        <h4>결제수단</h4>
                        {showmethod()}
                        {/* <label><input type="radio" value={'bank'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> 무통장 입금 </label>
                        <label><input type="radio" value={'card'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> 카드결제 </label>                        
                        <label><input type="radio" value={'npay'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> Npay </label>
                        <label><input type="radio" value={'kakaopay'} name="pay" onChange={(e) => { setPaymentMethod(e.target.value) }} /> Kakao pay </label> */}
                    </div>
                    {PaymentselectForm()}

                    <button type="submit">결제하기</button>

                </form>
            </div>

        </div>
    )
}


export default Payment