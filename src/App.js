import logo from './logo.svg';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar title="TextUtils" about="AboutMe"/> 
    <div className="container my-3">
    <TextForm heading= "Enter text to Analyse"/>
    </div>
   
  </>
  );
}

export default App;
