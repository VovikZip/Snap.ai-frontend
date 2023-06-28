import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjItem from '../components/ProjItem/ProjItem'


const Home = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <Navbar/>
      <div className="home_container mt-4   ">
        <div className="home_title align-items-left ">
          <span>Усі проекти</span> 
        </div>
        <div className="home_search mt-3">
          <div className="search_form input-group" style={{height: '46px'}}>
            <input 
                type="email" 
                className="sear-form form-control mb-4" 
                placeholder="Пошук..."
            />
            <button className='search_butt btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5' style={{height: '37.7px'}}>
              <img src="../assets/search.png" alt="search" style={{width: '27px', height: '27px'}} />
            </button>
          </div>
          {/* <div className="search_param">
            <span>Сортувати за датою</span>
            <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
          </div> */}
          <div className="search_param">
            <select style={{border: 'none', width: '200%'}}>
              <option value='date'>Сортувати за датою</option>
              <option  value='title'>Сортувати за назвою</option>
            </select>
          </div>
          
        </div>
        <div className="item_list d-flex flex-column align-items-center ">
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

export default Home