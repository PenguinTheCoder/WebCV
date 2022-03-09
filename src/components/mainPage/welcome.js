import React from 'react';
import './welcome.css';
import Header from './headerpic.JPG';
import { useNavigate } from "react-router-dom";


const MainPage = (props) => {

    const navigate = useNavigate();

    return (
     <div className='pageFlex'>
 
                <div id='bg'>
                    <img alt='MainPic' src={Header}></img>
                </div>
    
    <div className='center'>
    <button onClick={() => navigate("/aboutMe")} className="button-48" role="button"><span class="text">About me</span></button>
    <button onClick={() => navigate("/CV")} className="button-48" role="button"><span class="text">Education and job history</span></button>
    <button onClick={() => navigate("/contact")} className="button-48" role="button"><span class="text">Contact me </span></button>           
    </div>

     </div>
    )
}

export default MainPage;