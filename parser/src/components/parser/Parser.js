import React, {useEffect,useState} from 'react';
import './Parser.css'

function Parser() {
        
    const [unparsedText,setUnparsedText] = useState("");    
    const [parsedText,setParsedText]  = useState("");    
    const port = '35015';
    
    //When unparsedText changes this hook is executed and calls the API
    useEffect(() => {
        if(unparsedText!==undefined && unparsedText!==''){            
            const apiUrl = `http://localhost:${port}/api/parser?s=${unparsedText}`;      
            fetch(apiUrl)
            .then(r => r.text())
            .then(t => setParsedText(t))                        
        }
    }, [unparsedText])

    const buttonClick = () => {
        // this arrow function is executed when Parse button is clicked          
        let txt = document.getElementById("txtToParse").value;
        txt = btoa(txt); //Encodes the text in base 64
        setUnparsedText(txt);  //use the hook to assign the value to unparsedText
    };
    return (
        <div className="div-container margin">            
            <div className="input-group margin">
                <span className="input-group-text">Put your text here</span>
                <input id="txtToParse" type="text" aria-label="Text" className="form-control"/>
                <button className="btn btn-primary" onClick={buttonClick}>Parse</button> 
            </div>
            <div className="input-group margin">                
                <input id="txtResult" type="text" aria-label="Text" className="form-control" value={parsedText}/>
            </div>    
        </div>
    )
}
export default Parser

