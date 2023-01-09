import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("Changed...");
  }

  const handleUpClick = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
    console.log("Clicked...");
  }

  const handleLoClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    console.log("Clicked...");
  }

  const handleReClick = () => {
    setText("");
    console.log("Reset...");
  }

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")) ;
    console.log("Spaces removed...");
  }

  const speakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);

    const toggle = document.getElementById('toggle')
    if(toggle.textContent === "Speak"){
      toggle.innerHTML = "Stop!";
      console.log("runs...");
    }else{
      toggle.innerHTML = "Speak";
      if (toggle.innerHTML === "Speak"){
        window.speechSynthesis.cancel();
    }
    }
    console.log("Speaking...");
  }

  return (
    <div className='container abc'>
        <div className="mb-3 my-5">
          <h2 style={{color: props.style === 'light' ?  'black' :'white'}}>{props.title}</h2>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="6"
            // placeholder='Enter Text here...'
            value={text}
            style={{backgroundColor: props.style === 'light' ?  'white' :'black', 
                    color: props.style === 'light' ?  'black' :'white'}}
            onChange={handleOnChange}>
          </textarea>
        </div>

        <button className='btn btn-primary mx-5' onClick={handleUpClick}>
        Uppercase</button>

        <button className='btn btn-primary mx-5' onClick={handleLoClick}>
        Lowercase</button>

        <button className='btn btn-primary mx-5' onClick={handleReClick}>
        Reset</button>

        <button className='btn btn-primary mx-5' onClick={handleSpaceClick}>
        Remove Extra Spaces</button>

        <button className='btn btn-primary mx-5' onClick={speakClick} id='toggle'> 
        Speak</button>

        <div className="my-3">
          <p style={{color: props.style === 'light' ?  'black' :'white'}}>{text.split(" ").length} Words {text.length} characters. {0.008 * text.split(" ").length} minutes read</p>
        
        </div>

        <div className="container my-5">
          <h2 style={{color: props.style === 'light' ?  'black' :'white'}}>Preview</h2>
          <p style={{color: props.style === 'light' ?  'black' :'white'}} className="special">{text}</p>
        </div>
    </div>
  )
}


