import React from "react";
import './CV.css';

const CV = (props) => {

    return (
  <div>
         <div>
      <nav className='tekst'>
                <p><a href= '/' >Home</a></p>
                <p><a href= '/aboutMe'>About me</a></p>
                <div className='trenutno'> 
                <p><a href= '/CV'>Education and job history</a></p>
                </div>
                <p ><a href= '/contact'>Contact me</a></p>           
            </nav>
        </div>  

        <h1>Education</h1>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>2012 - 2016</h2> 
            <p>High school of Electrical Engineering and Computering, Rijeka</p>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>2016 – present</h2> 
            <p>Faculty of Maritime Studies in Rijeka</p>
        </div>
        </article>

        <h1>Job history</h1>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>04.2021  -  10.2021</h2> 
            <p>Ford Krainc </p>
                <ul>
                    <li>service and maintanance of vehicles</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>10.2020 - 12.2020 </h2> 
            <p>Alarm Automatika</p>
                <ul>
                    <li>service of computer and alarm system, software maintenance</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>05.2020 - 09.2020</h2> 
            <p>Social Media Menager and Photoshop designer</p>
                <ul>
                    <li> customer service, Q&A, photography</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>01.2018 - 10.2018</h2> 
            <p>Adriatic Hotel Opatija</p>
                <ul>
                    <li>valet parking, communictaion and welcoming of guests</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>10.2020 - 12.2020 </h2> 
            <p>Alarm Automatika</p>
                <ul>
                    <li>service of computer and alarm system, software maintenance</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>06.2017 - 09.2017 </h2> 
            <p>Lifeguard on Aquapark Opatija</p>
                <ul>
                    <li>care for participants, equipment care, communication with guests</li>
                </ul>
        </div>
        </article>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h2>2015 - 2017 </h2> 
            <p>Alarm Automatika</p>
                <ul>
                    <li>service of computer and alarm system, keeping records of various documents, administrative jobs, software introduction</li>
                </ul>
        </div>
        </article>
  </div>
    )
}


export default CV;