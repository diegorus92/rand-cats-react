import './color-selector-component.css';

const ColorSelectorComponent = ({name, colorSelectedOutput}) => {
    
    return (
        <>
            <div className="color-selector-container">
                <h4>Select your color</h4>
                <input className="color-select-input" type="color" name={name} onChange={(event) => { colorSelectedOutput(event.target.value)}}/>
            </div>
            

        </>
    )
};

export default ColorSelectorComponent;