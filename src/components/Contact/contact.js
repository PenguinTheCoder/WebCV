import React, {useState} from "react"
import './contact.css';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/e04c6410-9d50-11ec-bdf8-dd9c99f898ec";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <h2>Thank you!</h2>
          <div>We'll be in touch soon.</div>
          <button><a href= '/'>Home</a></button>
        </>
      );
    }
  
    return (
        <div className="FilloutForm">
        <div>
        <nav className='tekst'>
                  <p><a href= '/' >Home</a></p>                  
                  <p><a href= '/aboutMe'>About me</a></p>
                  <p><a href= '/CV'>Education and job history</a></p>
                    <div className='trenutno'> 
                  <p ><a href= '/contact'>Contact me</a></p>   
                    </div>
              </nav>
          </div> 
          <div className="header">
        <h1>Contact me</h1>
          </div>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="space1">  
          <input type="text" placeholder="Your name" name="name" className="middle" required />
        </div>
        <div className="space">
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="space">
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div className="space">
          <button type="submit"> Send a message </button>
        </div>
      </form>
 
      </div>
    );
  };
  
  export default ContactForm;