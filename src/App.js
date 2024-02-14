
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)


  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element=<News apikey={apikey} key="general" setProgress={setProgress} country="in" category="general" /> />
          <Route exact path="/health" element=<News apikey={apikey} key="health" setProgress={setProgress} country="in" category="health" /> />
          <Route exact path="/sports" element=<News apikey={apikey} key="sports" setProgress={setProgress} country="in" category="sports" /> />
          <Route exact path="/science" element=<News apikey={apikey} key="science" setProgress={setProgress} country="in" category="science" /> />
          <Route exact path="/business" element=<News apikey={apikey} key="business" setProgress={setProgress} country="in" category="business" /> />
          <Route exact path="/technology" element=<News apikey={apikey} key="technology" setProgress={setProgress} country="in" category="technology" /> />
          <Route exact path="/entertainment" element=<News apikey={apikey} key="entertainment" setProgress={setProgress} country="in" category="entertainment" /> />
          <Route exact path="/About" element=<About /> />
          <Route exact path="/Contact" element=<Contact /> />
        </Routes>
        <Footer/>
      </Router >
    </div >
  )
}

export default App;