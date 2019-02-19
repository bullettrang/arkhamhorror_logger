import React, { Component } from 'react';
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
