import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Posts from './Components/Posts';
import Login from './Components/Login'

function App() {
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>

      </Router>
    </>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'))
