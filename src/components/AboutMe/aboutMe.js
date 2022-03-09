import React from 'react';
import './aboutMe.css';
import Logos from './Logos.png';



const AboutMe = (props) => {
 return (
     <div>
         <div>
      <nav className='tekst'>
                <p><a href= '/' >Home</a></p>
                <div className='trenutno'> 
                <p><a href= '/aboutMe'>About me</a></p>
                </div>
                <p><a href= '/CV'>Education and job history</a></p>
                <p ><a href= '/contact'>Contact me</a></p>           
            </nav>
        </div>  

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h1>Get to know me</h1>
            <p>Dedicated, hardworking and persistent. I know no obstacles and love to move my limits. Never satisfied with knowledge I possess and always strive for more. Natural born motivator who pulls others with his success. Quick learner and good listener. Gym lover, car enthusiast and electrician nerd, my knowledge is spread wide and I consider it with moving boundaries that expand every day. Curious about how programs work behind the curtain. Disciplined in everything that I invest my time in. Approachable and communicative in all fields of conversation being Job-wise or private. Glad to help and push others to their goals. Everything that doesn't seem understandable for me is a challenge, I would invest my time, effort and money to become master of it.</p>
        
        </div>
        </article>


        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-60-l mw7 center">
        <div className='Card'>
            <h1>Why Web Dev?</h1>
            <p>Web development was always something that sparked my interest. That was one of the reasons why I chose IT as my career. But more than that, I chose it because I like building stuff and having unique project . I'm always interested to know how things work, how I can make them work and if they could work better. 
Coding provides this to me. Working a job in which every day is a chance to learn or invent something new, that's the kind of workplace where I want to be and where I want to grow.
</p>
        </div>
        </article>
        <br></br>
        <br></br>
        <hr className='style-one'></hr>


        <h1>Technologies that I worked with</h1>

            <div >     
                    <img src={Logos} ></img>               
            </div>    

     </div>    
 )
}

export default AboutMe;