import React from 'react'
import { NavLink } from 'react-router-dom'

const StartPage = () => {
  return (
    <div className='start_typography d-flex flex-column' >
      <span className='text_subtitle' >Ласкаво просимо до</span>
      <img className='logo_img mt-4' style={{width: '59rem', height: '10,8rem'}} src='../assets/logoSnap.png' alt='Logo' />
      <div className=" text_description d-flex flex-column mt-3">
        <span className='mb-2'>— найкращий сервіс розпізнавання зображень на базі найсучасніших нейронних мереж.</span>
        <br/>
        <span>Snap.AI дозволяє легко й точно виявляти й класифікувати об’єкти на будь-якому зображенні. Наша передова технологія аналізує візуальні елементи зображення та визначає ключові характеристики для визначення категорії об’єкта.</span>
        <br/>
        <span>Якщо ви професійний фотограф, маркетолог або просто хочете класифікувати зображення для особистого використання, Snap.AI може допомогти. Наша платформа швидка, надійна та проста у використанні, що робить її ідеальним інструментом для будь-якого проекту.</span>
        <br/>
        <span>За допомогою Snap.AI ви можете оптимізувати процес аналізу зображень, заощадити час і приймати більш зважені рішення. Приєднуйтесь до нашої спільноти задоволених користувачів сьогодні та відкрийте для себе силу нейронної мережі розпізнавання зображень за допомогою Snap.AI.</span>

      </div>
      <div className="start_buttons d-flex mt-5  ">
        <NavLink to='/login'>
        <button type='submit' className="white_butt btn btn-light"><span>Авторизуватися</span></button>
        </NavLink>
        <NavLink to='/register'>
        <button type='submit' className="transparent_butt btn btn-primary-outline ms-5"><span style={{color: '#FFFFFF'}}>Зареєструватися</span></button>
        </NavLink>
        

      </div>
      {/* <MyButton text='Авторизуватися'/>  */}

      
    </div>
  )
}

export default StartPage