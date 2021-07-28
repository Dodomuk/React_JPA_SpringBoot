import React, { Component } from 'react';
import AppRouter from './view/routers/AppRouter';
import axios from 'axios';


const baseUrl = "http://localhost:8080"


class App extends Component{

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}
export default App;
