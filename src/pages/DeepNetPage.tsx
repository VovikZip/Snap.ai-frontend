import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProjItem from '../components/ProjItem/ProjItem'

const DeepNetPage = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <Navbar/>
        <div className="deepnet_content item_list mt-4 d-flex flex-column align-items-center">
            {/* <div className="deep_title">
                <span>Назва мережі:</span>
                <div className="deep_title_form input-group" style={{height: '46px'}}>
                <input 
                    type="email" 
                    className="title-form form-control mb-4" 
                    placeholder="Екпонати в музеї"
                />
                </div>
            </div>
            <div className="deep_description">
                <span style={{marginTop: '10px'}}>Опис мережі:</span>
                <div className="col-75">
                    <textarea name="subject" placeholder="Write something.." style={{height:'165px', width: '780px', borderRadius: '30px 30px 30px 30px', paddingTop: '10px', paddingLeft: '15px', maxHeight: '165px'}}></textarea>
                </div>
            </div>
            <div className="category-type">

            </div> */}
            <div className="item_list_description d-flex flex-column align-items-center ">
                <div className="deep_title">
                    <span>Назва мережі:</span>
                    <div className="deep_title_form input-group" style={{height: '46px'}}>
                        <input 
                            type="email" 
                            className="title-form form-control mb-4" 
                            placeholder="Екпонати в музеї"
                        />
                    </div>
                </div>
                <div className="deep_description">
                    <span style={{marginTop: '10px'}}>Опис мережі:</span>
                    <div className="col-75">
                        <textarea name="subject" placeholder="Write something.." style={{height:'165px', width: '780px', borderRadius: '30px', paddingTop: '10px', paddingLeft: '15px', maxHeight: '165px', border: '2px solid #000'}}></textarea>
                    </div>
                </div>
                <div className="category-type">
                    <div className="categoty_title">
                        <span>Категорії нейронної мережі</span>
                    </div>
                    <div className="category_btns">
                        <button type='submit' className="white_buttn_cat btn btn-light"><span>Нова категорія</span></button>
                        <button type='submit' className="white_buttn_cat btn btn-light"><span>Нова категорія</span></button>
                        <div className="search_param_cat">
                          <select style={{ border: 'none', width: '200%' }}>
                              <option value='date'>Сортувати за датою</option>
                              <option value='title'>Сортувати за назвою</option>
                          </select>
                        </div>
                    </div>
                    <div className="category_sett">
                        <div className="sett_top">
                            
                            <div className="sett_title">
                                <span>Назва категорії:</span>
                            </div>
                            <div className="deep_title_form_top input-group" style={{ height: '46px' }}>
                                <input
                                    type="email"
                                    className="title-form form-control mb-4"
                                    placeholder="Картини"
                                />
                            </div>
                            <button type='submit' className="white_buttn_cat btn btn-light"><span>Видалити категорію</span></button>
                        </div>
                    </div>
                     
                
                </div>
            
            </div>
            

        </div>
    </div>
  )
}

export default DeepNetPage