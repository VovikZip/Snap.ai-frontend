import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {publicRoutes, privateRoutes} from './router/index'
import { useAppSelector } from './hooks/reducer';

function App() {

  const [user, setUser] = useState(false)

  const {isAuth, users} = useAppSelector(state => state.userReducer)

  return (
    <div className={isAuth ? 'App app_private' : 'App app_public'}>
      <BrowserRouter>
        {!isAuth
        ?
          <Routes>
              {publicRoutes.map(route => 
                <Route 
                  
                  path={route.path}
                  element={route.element}
                />
              )}
              <Route path='/' element={<Navigate to='/start' />}/>
              <Route path='*' element={<Navigate to='/start' />}/>
          </Routes>
        :
          <Routes>
            {privateRoutes.map(route => 
                <Route 
                  
                  path={route.path}
                  element={route.element}
                />
              )}
            <Route path='/' element={<Navigate to='/home' />}/>
            <Route path='*' element={<Navigate to='/home' />}/>

          </Routes>
        
        }

      </BrowserRouter>
    </div>
    // <div className="App d-flex w-100 align-items-center justify-content-center">
    //   {/* <img src="./assets/back.jpg"/> */}
    //   <div className="register_form">
    //     <div className="login_text d-flex flex-column">
    //       <span className="text_title">Зареєструвати</span>
    //       <span className="text_subtitle">Новий обліковий запис</span>
    //     </div>
    //     <div className="register_forms d-flex flex-column mb-5">
    //       <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Email..."></input>
    //       <input type="password" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Пароль..."></input>
    //       <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Підтвердження паролю..."></input>
    //     </div>
    //     <div className="login_btn d-flex align-items-center justify-content-between mt-5">
    //       <button type='submit' className="btn btn-dark " >Увійти</button>
    //     </div>
    //     {/* <p className="fs-2 fw-semibold">Авторизуватися</p>
    //     <p className="fs-3">у свій обліковий запис, щоб продовжити</p> */}
    //   </div>
    // </div>
  );
}

export default App;
