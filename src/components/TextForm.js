import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowerClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleClearClick = ()=>{
    // console.log('UpperCase was clicked  '+text);
    let newText = ''
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("mybox")
    text.select()
    text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value)
    // props.showAlert("Copied to clipboard!! ","Success")
  }
  
  const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  

  return (
    <>
    <div style={{color: props.mode === 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'?'#c1c1c1':'#d3d3d3'}} onChange={handleOnChange} id="mybox" placeholder="Enter a Text" rows="8"></textarea>
  </div>
  <button className='btn btn-dark mx-3 my-2' onClick={handleUpClick}>Convert to uppercase</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleLowerClick}>Convert to lowercase</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-dark mx-3 my-2' onClick={handleClearClick}>Clear Text</button>
  </div>
  <div className="container my-4" style={{color: props.mode === 'light'?'black':'white'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter a text above to preview it here"}</p>
  </div>
  </>
  )
}
