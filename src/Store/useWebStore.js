import { create } from "zustand";

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

const useWebStore = create((set,get)=>({    
    users: JSON.parse(localStorage.getItem('users'))||defaultUsers,
    loginUser: JSON.parse(localStorage.getItem('loginUser'))||[],
    setUsers:(newUser)=>{
        set({users:newUser});
        localStorage.setItem('users',JSON.stringify(newUser));
    },
    //회원 추가
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
        const user = get().users.find((u)=>u.id===id);
        if(!user){
            return {ok:false,msg:'아이디가 없습니다'}
        }
        if(user.pw !==pw){
            return {ok:false,msg:'비밀번호가 일치 하지 않습니다.'}
        }
        set({loginUser:user});
        localStorage.setItem('loginUser',JSON.stringify(user));

        return {ok:true,msg:''};
    },
    //로그아웃
    logout:()=>{
        set({loginUser: null});
        localStorage.removeItem('loginUser');
    }
}))

export default useWebStore;