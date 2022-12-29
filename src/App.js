import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import MainPage from './routes/MainPage';

import './assets/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// header, footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
