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
        navigator.clipboard.writeText(text)
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
            <h1 className="mb-4">{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled = {text.length===0} className="btn-primary btn my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn-primary btn mx-2 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} className="btn-primary btn mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length===0} className="btn-primary btn mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled = {text.length===0} className="btn-primary btn my-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
            
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
        
    )
}
