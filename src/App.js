import logo from './logo.svg';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';


    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
    <div className="container my-5">
    <TextForm heading= "Enter text to Analyse" mode={mode}/>
    {/* <About/> */}
    </div>
    
  </>
  );
}

export default App;
