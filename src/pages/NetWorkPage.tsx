import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const NetWorkPage = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Navbar/>
        <div className="network_content mt-4 d-flex flex-column align-items-center">
            <div className="network_title mt-5">
                <span>Dog’s detection</span>
            </div>
            <div className="network_subtitle d-flex justify-content-left ps-5 mt-4" >
                <div className="network_author">
                    <span>Автор:</span>
                    <span className='ps-2'>Mariia Volkova</span>
                </div>
                <div className="network_date ps-5">
                    <span>Останні зміни:</span>
                    <span className='ps-2'>05.04.2023 15:42</span>
                </div>
            </div>
            <div className="network_description d-flex justify-content-left ps-5 pt-2">
                <span>Даний проект призначений для пошуку собак та людей на зображенні.</span>
            </div>
            <div className="network_interactive mt-4 d-flex ">
                <div className="network_item d-flex flex-column align-items-center justify-content-between">
                    <div className="network_item_elem d-flex flex-column align-items-left ps-5 justify-content-between py-3">
                        <button type='submit' className="white_butt_border btn btn-light"><span>Завантажити картинку</span></button>
                        <button type='submit' className="white_butt_border btn btn-light"><span>Завантажити відео</span></button>
                        <button type='submit' className="white_butt_border btn btn-light"><span>Відео з камери</span></button>
                    </div>
                    <div className="network_item_elem d-flex flex-column align-items-left ps-5 justify-content-end py-3">
                        <button type='submit' className="white_butt_border btn btn-light"><span>Скачати оброблене</span></button>
                    </div>
                    
                    
                </div>
                <div className="network_item d-flex align-items-center  py-4">
                    <img src="../assets/network_img.png" style={{width: '85%'}} alt="network_img" />
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default NetWorkPage