import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const AboutPage = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Navbar/>
        <div className="about_container mt-5 ">
            <div className="about_title mt-5">
                <span>Про Snap.AI</span>
            </div>
            <div className=" text_description_about d-flex flex-column mt-3">
                <span className='mb-2'>— найкращий сервіс розпізнавання зображень на базі найсучасніших нейронних мереж.</span>
                <br/>
                <span>Snap.AI дозволяє легко й точно виявляти й класифікувати об’єкти на будь-якому зображенні. Наша передова технологія аналізує візуальні елементи зображення та визначає ключові характеристики для визначення категорії об’єкта.</span>
                <br/>
                <span>Якщо ви професійний фотограф, маркетолог або просто хочете класифікувати зображення для особистого використання, Snap.AI може допомогти. Наша платформа швидка, надійна та проста у використанні, що робить її ідеальним інструментом для будь-якого проекту.</span>
                <br/>
                <span>За допомогою Snap.AI ви можете оптимізувати процес аналізу зображень, заощадити час і приймати більш зважені рішення. Приєднуйтесь до нашої спільноти задоволених користувачів сьогодні та відкрийте для себе силу нейронної мережі розпізнавання зображень за допомогою Snap.AI.</span>

            </div>
        </div>
    </div>
  )
}

export default AboutPage