import { create } from "zustand";
import ReviewList from "../Board/List/ReviewList";

const defaultUsers = [  
    {
      name: '관리자',
      id: 'admin',
      pw: '1234',
      birth: '20000101',
      email: 'admin@test.com',
      phone: '01000000000'
    }
  ];

  const defaultPosts = [
    ...ReviewList
  ]


const useWebStore = create((set,get)=>({    
    users: JSON.parse(localStorage.getItem('users'))||defaultUsers,
    loginUser: JSON.parse(localStorage.getItem('loginUser'))||null,
    posts: JSON.parse(localStorage.getItem('posts'))||defaultPosts,
    //새로고침
    setUsers:(newUser)=>{
        set({users:newUser});
        localStorage.setItem('users',JSON.stringify(newUser));
    },
    //회원가입
    addUser:(newUsers)=>{
        const updated = [...get().users,newUsers];
        set({users: updated});
        localStorage.setItem('users',JSON.stringify(updated))
    },
    //회원 정보 수정
    updateUser:(updateUser)=>{
        const updated = get().users.map((user)=>
        user.id === updateUser.id ? updateUser: user);
        set({users: updated});
        localStorage.setItem('users',JSON.stringify(updated));
    },
    //로그인시 id.pw 파라미터로 보내고, return값으로 ok, 메세지 json으로 보냄
    login : (id, pw)=>{
        
        if(id === ''){
            return{ok: false, msg: '아이디를 입력해주세요.'}
        }
        if(pw === ''){
            return{ok: false, msg: '비밀번호를 입력해주세요.'}
        }

        const user = get().users.find((u)=>u.id===id);  

        if(!user){

            return{ok: false, msg: '아이디/비밀번호가 일치하지 않습니다.'}
            
        }else{
            if(user.pw !==pw){
                return{ok: false, msg: '비밀번호가 일치 하지 않습니다.'}
            }
        } 
        
        
        set({loginUser:user});
        localStorage.setItem('loginUser',JSON.stringify(user));

        return {ok:true,msg:''};
    },
    //로그아웃
    logout:()=>{
        set({loginUser: null});
        localStorage.removeItem('loginUser');
    },

    reservations: JSON.parse(localStorage.getItem("reservations")) || [],
    cancelReservations: JSON.parse(localStorage.getItem("cancelReservations")) || [],

    addReservation: (newReservation) => {
        const updated = [...get().reservations, newReservation];
        set({ reservations: updated });
        localStorage.setItem("reservations", JSON.stringify(updated));
    },

    cancelReservation: (id) => {
        const target = get().reservations.find((item) => item.id === id);

        if (!target) return;

        const updateReservations = get().reservations.filter(
        (item) => item.id !== id
        );

        const updateCancel = [...get().cancelReservations, target];

        set({
        reservations: updateReservations,
        cancelReservations: updateCancel
        });

        localStorage.setItem("reservations", JSON.stringify(updateReservations));
        localStorage.setItem("cancelReservations", JSON.stringify(updateCancel));
    },

    delCanReservation: (id) => {
        const updated = get().cancelReservations.filter(
            (item) => item.id !== id
        )

        set({ cancelReservations: updated })
        localStorage.setItem("cancelReservations", JSON.stringify(updated))
    },
        
    //게시판 게시글 추가
    addPost: (newPost) => {
        const updated = [...get().posts,newPost];
        set({posts: updated});
        localStorage.setItem('posts',JSON.stringify(updated));
    },

    //게시글 삭제
    deletePost: (id) => {
    const updated = get().posts.filter((item) => item.id !== id);
    set({ posts: updated });
    localStorage.setItem('posts', JSON.stringify(updated));
    },


    payment: JSON.parse(localStorage.getItem('payment'))|| [],

    addPayment: (newpayment)=>{
        const updated =[...get().payment,newpayment];
        set({ payment: updated});
        localStorage.setItem("payment", JSON.stringify(updated));
    },



}))

export default useWebStore;