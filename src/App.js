import React, { Component } from 'react';
//mport { BrowserRouter as Router, Route, Link } from "react-router-dom";  
import './App.css';
import Home from './Home';
import Layout from './hoc/Layout';



class App extends Component {
  render() {
    return (
        <Layout>
          <Home/>
        </Layout>
    );
  }
}

export default App;
