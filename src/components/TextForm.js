import React, {useState} from 'react';

export default function TextForm(props) {
const [text,setText]= useState('Enter text here');
const handleUpClick=()=>{
    let newText=text.toUpperCase();
     console.log(newText);
    setText(newText);
}
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
}
const handleClickText=()=>{
    setText(" ");
}
  return (
<div>

  <h1 className="heading">{props.heading}</h1>
  <div className="container mb-3">
  <textarea className="form-control" value={text}  onChange={handleOnChange} onClick={handleClickText} id="exampleFormControlTextarea1" rows="9"></textarea>
  <br/>
  <button className="btn btn-primary"  onClick={handleUpClick}>ToUpperCase</button>
  </div>
</div>
  );
}
