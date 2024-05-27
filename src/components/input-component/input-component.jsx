import {useState, useEffect} from 'react';

const Input = (({name, inputText}) => {
    const [stateValueText, setStateValueText] = useState("");
    useEffect(() => {
        inputText(stateValueText);
    }, [stateValueText]);


    const inputChange = (event) => {
        setStateValueText(event.target.value);
    }


    return (
        <>
            <input type="text" name={name} placeholder="Enter a text here"  onChange={inputChange}/>
        </>
    );
}) ;

export default Input;