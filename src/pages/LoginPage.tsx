import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reducer'
import {authorization} from '../store/reducers/UserSlice'

const LoginPage = () => {

  const dispatch = useAppDispatch()
  const {users} = useAppSelector(state => state.userReducer)
  const [curUser, setCurUser] = useState({email: '', password: ''})

  const auth = () => {
    users.map(user => {
      if (user.email === curUser.email && user.password === curUser.password){
        console.log(curUser)
        dispatch(authorization(user))
      }
    })
    // dispatch(authorization())
  }

  return (
      <div className="login_form">
        <div className="login_text d-flex flex-column">
          <span className="text_title">Авторизуватися</span>
          <span className="text_subtitle">у свій обліковий запис, щоб продовжити</span>
        </div>
        <div className="login_forms d-flex flex-column p">
          <input 
            type="email" 
            className="form-control mb-4" 
            placeholder="Email..."
            value={curUser.email}
            onChange={e => setCurUser({...curUser, email: e.target.value})}
          ></input>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Пароль..."
            value={curUser.password}
            onChange={e => setCurUser({...curUser, password: e.target.value})}
          ></input>
        </div>
        <div className="login_btn d-flex align-items-center justify-content-between pb-2">
          <button 
            type='submit' 
            className="dark_butt btn btn-dark" 
            onClick={auth} 
          >Авторизуватися</button>
          <button type='submit' className="dark_butt btn btn-dark " >Увійдіть за допомогою Google</button>
        </div>
        <div className="login_links d-flex pt-1 ">
          <p>У вас ще немає облікового запису?</p> <NavLink to="/register" className="text-decoration-underline ps-3 fw-bold">Зареєструватися!</NavLink>
        </div>
        
        {/* <p className="fs-2 fw-semibold">Авторизуватися</p>
        <p className="fs-3">у свій обліковий запис, щоб продовжити</p> */}
      </div>
    
  )
}

export default LoginPage