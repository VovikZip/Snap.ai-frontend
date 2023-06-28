import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProjItem from '../components/ProjItem/ProjItem'
import { NavLink } from 'react-router-dom'

const MyProjPage = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Navbar/>
        <div className="home_container mt-4   ">
        <div className="home_title align-items-left ">
          <span>Мої проекти</span> 
        </div>
        <div className="home_search mt-3">
          <NavLink to='/deepnet'>
            <button type='submit' className="white_buttn btn btn-light"><span>Новий проект</span></button>  
          </NavLink>
          <div className="search_param">
            <select style={{border: 'none', width: '200%'}}>
              <option value='date'>Сортувати за датою</option>
              <option  value='title'>Сортувати за назвою</option>
            </select>
          </div>
          
        </div>
        <div className="item_list d-flex flex-column align-items-center mt-2">
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
          <ProjItem/>
        </div>

      </div>
    </div>
  )
}

export default MyProjPage