import React from 'react'
import './navbar.css'
import Logo from '../../assets/img/navbarLogo.svg'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../reducers/userReducer'


export default function Navbar() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  
  
  return (
    <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">MERN CLOUD</div>
                {!isAuth && <div className="navbar__login"><Link to='/login'>Войти</Link></div>}
                {!isAuth && <div className="navbar__registration"><Link to='/registration'>Регистрация</Link></div>}
                {isAuth && <div className="navbar__login" onClick={()=> dispatch(logout())}>Выйти</div>}
            </div>
        </div>
  )
}



