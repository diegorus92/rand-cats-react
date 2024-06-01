import './drop-list-selector-component.css';

const DropListSelectorComponent = ({name, label, optionsListInput, itemSelectedOutput}) => {

    const optionsList = optionsListInput;

    const options = optionsList.map(option => <option value={option} key={option}>{option}</option>)

    return (
        <>
            <div className="drop-list-selector-container">
                <label className="drop-list-selector-label" htmlFor={name}>{label}</label>
                <select className='drop-list-selector-select' id={name} name={name} onChange={(e) => itemSelectedOutput(e.target.value)}>
                    {options}
                </select>
            </div>
        </>
    );
}

export default DropListSelectorComponent;