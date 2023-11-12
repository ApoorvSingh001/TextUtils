import logo from './logo.svg';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Dark Mode has been Enabled',"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been Enabled',"success");
    }

    }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-5">
    <TextForm showAlert={showAlert} heading= "Enter text to Analyse" mode={mode}/>
    {/* <About/> */}
    </div>
    
  </>
  );
}

export default App;
