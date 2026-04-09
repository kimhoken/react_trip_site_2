import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarMain.css"
import useWebStore from "../Store/useWebStore";

const NavbarMain =()=>{

  const loginUser = useWebStore((state) => state.loginUser);
  const logout = useWebStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
    return(

    <div>
        <header>
          <nav className='navbar'>
            <Link className='navbar-logo' to="/">
              <img src="/images/logo2.png" width="145" />
            </Link>

            <div className='navbar-menu' id='navbarNav'>
              <ul className='navbar-list'>
                <li className='nav-item mainpage'>
                  <Link className='nav-link' to="/">Home</Link>
                </li>


                <li className='nav-item search trips'>
                  <Link className='nav-link' to="/SearchTrips">SearchTrips</Link>
                </li>

                <li className='nav-item packages'>
                  <Link className='nav-link' to="/Packages">Packages</Link>
                    <div className='dropdown-full'>
                        <ul className='dropdown-menu'>
                            <li><Link className='dropdown-link' to="/Packages/DomesticPage">국내</Link></li>
                            <li><Link className='dropdown-link' to="/Packages/OverseasPage">해외</Link></li>
                        </ul>
                    </div>
                </li>

                <li className='nav-item community'>
                  <Link className='nav-link' to="/Board">Community</Link>
                    <div className='dropdown-full'>
                        <ul className='dropdown-menu'>
                            <li><Link className='dropdown-link' to="/Board">여행 리뷰</Link></li>
                            <li><Link className='dropdown-link' to="/TripTip">여행 Tip</Link></li>
                        </ul>
                    </div>
                </li>

                <li className='nav-item mytrips'>
                  <Link className='nav-link' to="/MyTrips/mypage">My Trips</Link>
                    <div className='dropdown-full'>
                        <ul className='dropdown-menu'>

                            <li><Link className='dropdown-link' to="/MyTrips/mypage">마이페이지</Link></li>
                            <li><Link className='dropdown-link' to="/MyTrips/reservations">내 예약</Link></li>
                            <li><Link className='dropdown-link' to="/MyTrips/favorites">즐겨찾기</Link></li>
                            <li><Link className='dropdown-link' to="/MyTrips/tips">체크리스트</Link></li>

                        </ul>
                    </div>
                </li>

                <li className='nav-item login'>
                  <Link className='nav-link' to="/LoginPage">Login</Link>
                </li>
              </ul>
            </div>

            <div className='navbar-user'>              
              {loginUser ? (
              <div>
                <Link className="user-link" to="/MyTrips/mypage">
                  {loginUser.id}님
                </Link>

                <div
                  type="button"
                  className="user-link signup logout"
                  onClick={handleLogout}
                >
                  로그아웃
                </div>
              </div>
            ) : (
              <div className="user-link-upbtn">
                <Link className="user-link" to="/LoginPage">로그인</Link>
                <Link className="user-link signup" to="/SignupPage">회원가입</Link>
              </div>
            )}
              <Link className='user-link signup' to="/CustomerService">고객센터</Link>
            </div>
          </nav>
        </header>

    </div>

    )
}

export default NavbarMain