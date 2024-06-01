import './input-component.css';
import {useState, useEffect} from 'react';

const Input = (({name, inputText, color}) => {
    const [stateValueText, setStateValueText] = useState("");
    useEffect(() => {
        inputText(stateValueText);
    }, [stateValueText]);


    const inputChange = (event) => {
        setStateValueText(event.target.value);
    }


    return (
        <>
            <input className='input-text' type="text" name={name} style={color = {color}} placeholder="Enter a text here"  onChange={inputChange}/>
        </>
    );
}) ;

export default Input;