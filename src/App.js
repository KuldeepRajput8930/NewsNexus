
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element=<News apikey={this.apikey} key="general" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="general" /> />
            <Route exact path="/health" element=<News apikey={this.apikey} key="health" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="health" /> />
            <Route exact path="/sports" element=<News apikey={this.apikey} key="sports" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="sports" /> />
            <Route exact path="/science" element=<News apikey={this.apikey} key="science" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="science" /> />
            <Route exact path="/business" element=<News apikey={this.apikey} key="business" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="business" /> />
            <Route exact path="/technology" element=<News apikey={this.apikey} key="technology" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="technology" /> />
            <Route exact path="/entertainment" element=<News apikey={this.apikey} key="entertainment" pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="entertainment" /> />
          </Routes>
        </Router >
      </div >
    )
  }
}

