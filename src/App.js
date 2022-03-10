import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './components/mainPage/welcome.js';
import AboutMe from './components/AboutMe/aboutMe.js';
import CV from './components/CV/CV.js';
import ContactForm from './components/Contact/contact.js';



class App extends Component {

componentDidMount() {
  fetch('http://localhost:8080')
    .then(response => response.json())
    .then(console.log("connected"))
}

render () {
  return (
    <div >
      <Router>
        <Routes>         
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
};
}

export default App;
