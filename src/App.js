import React from 'react';
import Header from './component/header/header';
import Main from './component/main/main';
import History from './component/history/history';
import Help from './component/help/help';
import Footer from './component/footer/footer';
import { Routes, Route } from "react-router-dom";
import reducer, { setMethodAndURL } from "./reducer/Reducer";
import { useReducer } from "react";


const intialState = {
    history: [],
}
// const handleHistory = (e) => {
//   e.preventDefault();
//   dispatch(setBody(e.target.innerText));


// }
    

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  function setHistory(action){
      dispatch(setMethodAndURL(action.payload))
  }  



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main  setHistory={setHistory}/>} />
        <Route path="/History" element={<History result={state}/>} />
        
      <Route path="/Help" element={<Help />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
