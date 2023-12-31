import React, {useState} from 'react';

export default function TextForm(props) {
const [text,setText]= useState('Enter text here');
const handleUpClick=()=>{
    let newText=text.toUpperCase();
     console.log(newText);
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
}
const handleLowClick=()=>{
  let newText=text.toLowerCase();
   console.log(newText);
  setText(newText);
  props.showAlert("Converted to LowerCase","success");
}
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
}
const handleClickText=()=>{
    if(text==='Enter text here')
    setText("");
}
  return (
    <>
<div style={{color: props.mode==='dark'?'white':'black'}}>

  <h1 className="heading"  >{props.heading}</h1>
  <div className="container mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} onClick={handleClickText} style={{backgroundColor: props.mode==='dark'?'gray':'white', 
  color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="9"></textarea>
  <br/>
  <button className="btn btn-primary"  onClick={handleUpClick}>ToUpperCase</button>
  <button className="btn btn-primary mx-3"  onClick={handleLowClick}>ToLowerCase</button>
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(' ').length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textBox above to preview"}</p>
  </div>
</div>

</>
  );
}
