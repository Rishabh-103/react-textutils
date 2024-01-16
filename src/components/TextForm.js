import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text's been cleared", "success")
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpaceClick = ()=>{
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been handled", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState('')
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn-primary btn" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn-primary btn mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn-primary btn mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn-primary btn mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn-primary btn" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
            
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
        
    )
}
