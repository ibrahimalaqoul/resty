// import './App.scss';
import React from 'react';
import Header from './component/header/header';
import Main from './component/main/main';
import History from './component/history/history';
import Help from './component/help/help';
import Footer from './component/footer/footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/History" element={<History />} />
        
      <Route path="/Help" element={<Help />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
