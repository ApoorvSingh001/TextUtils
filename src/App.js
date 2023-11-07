import logo from './logo.svg';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="TextUtils" about="AboutMe"/> 
    <div className="container my-5">
    {/* <TextForm heading= "Enter text to Analyse"/> */}
    <About/>
    </div>
    
  </>
  );
}

export default App;
