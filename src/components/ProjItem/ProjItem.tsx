import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjItem = () => {
  return (
    
    <div className='item_elem mt-3'>
        <NavLink to='/network' style={{textDecoration: 'none', color: '#000'}}>
            <div className="item_content">
                <div className="item_title">
                    <span>Flower detection</span>
                </div>
                <div className="item_desc ps-5">
                    <span>Даний проект призначений для пошуку квітів на зобра... </span>
                </div>
                <div className="item_dat">
                    <span>05.04.2023 15:42</span>
                </div>
                <div className="item_user">
                    <span>Mariia Volkova</span>
                    <img className='ms-4' src="../assets/trash.png" alt="trash" style={{height: '21px', width: '19px'}}/>
                </div>
            </div>
        </NavLink>
        
        
    </div>
  )
}

export default ProjItem