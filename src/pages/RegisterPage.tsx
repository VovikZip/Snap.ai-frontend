import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAppDispatch, useAppSelector } from '../hooks/reducer'
import { authorization, incr, registerUser, } from '../store/reducers/UserSlice'
import { IRegUser, IUser } from '../types/IUser'

const RegisterPage = () => {
  const dispatch = useAppDispatch()
  const {users, num} = useAppSelector(state => state.userReducer)
  const [isUnuc, setIsUnic] = useState(true)
  const [confirmpass, setConfirmpas] = useState('')
  const [regCurUser, setRegCurUser] = useState<IUser>({email: '', password: ''})

  const reg = () => {    
    if(regCurUser.password === confirmpass) {
      
      users.map(user => {
        if (user.email !== regCurUser.email) {
          dispatch(registerUser(regCurUser))
          console.log(users)
          dispatch(authorization(regCurUser))
        }    
       })
    }
  }
  
  return (
    <div className="register_form">
      <div className="login_text d-flex flex-column">
        <span className="text_title">Зареєструвати</span>
        <span className="text_subtitle">Новий обліковий запис</span>
      </div>
      <div className="register_forms d-flex flex-column mb-5">
        <input 
          type="email" 
          className="form-control mb-4"  
          placeholder="Email..."
          value={regCurUser.email}
          onChange={e => setRegCurUser({...regCurUser, email: e.target.value})}
        ></input>
        <input 
          type="password" 
          className="form-control mb-4"  
          placeholder="Пароль..."
          value={regCurUser.password}
          onChange={e => setRegCurUser({...regCurUser, password: e.target.value})}
        ></input>
        <input 
          type="password" 
          className="form-control" 
          placeholder="Підтвердження паролю..."
          value={confirmpass}
          onChange={e => setConfirmpas(e.target.value)}
        ></input>
      </div>
      <div className="login_btn d-flex align-items-center justify-content-between mt-4">
        <button 
          type='submit' 
          className="dark_butt btn btn-dark " 
          onClick={reg}
        >Увійти</button>
      </div>
      {/* <p className="fs-2 fw-semibold">Авторизуватися</p>
      <p className="fs-3">у свій обліковий запис, щоб продовжити</p> */}
    </div>
  )
}

export default RegisterPage