import './App.css'
import React, {useEffect, useState} from 'react';
import { ImageVisor } from './components/image-visor-component/image-visor-component'
import Input from './components/input-component/input-component.jsx'
import ColorSelectorComponent from './components/color-selector-component/color-selector-component.jsx';
import DropListSelectorComponent from './components/drop-list-selector-component/drop-list-selector-component.jsx';
import CatService  from './services/cat-api-service.jsx';


const label = "Hi!"
const catService = new CatService();
const optionsList = [
  "15", "20", "25", "30", "35", "40",
  "45", "50", "55", "60", "65", "70", 
  "75", "80"
];


function App() {
  const [textState, setTextState] = useState("");
  const [imageState, setImageState] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q2NqVIDYiHgQOhwue-PVLQHaEv%26pid%3DApi&f=1&ipt=6614374f2a5e1f7259f20a2cd128511d836cbf5d47832cd25bddddab076386ec&ipo=images");
  const [stateImageReady, setStateImageReady] = useState(true);
  const [colorSelectedState, setColorSelectedState] = useState("#000");
  const [fontSizeSelectedState, setFontSizeSelectedState] = useState(optionsList[0]);
  useEffect(() =>{
    console.log("Color selected: ", colorSelectedState);
    console.log("Font size selected: ", fontSizeSelectedState);
    console.log("\n-----------------------\n");
  },[colorSelectedState, fontSizeSelectedState]);
  

  const inputText = (inputValue) => {
    setTextState(inputValue);
  }

  const getColorSelected = (colorValue) =>{
    setColorSelectedState(colorValue);
  }

  const getFontSizeSelected = (fontSizeValue) =>{
    setFontSizeSelectedState(fontSizeValue);
  }

  function submit(e){
    e.preventDefault();
    let text = textState;
    if(text){ //if the user write a text...
      setStateImageReady(false);
      catService.getRandomCatWithText(text, colorSelectedState, fontSizeSelectedState).then((imageResult) => {
        if(imageResult){
          setImageState(imageResult);
          setStateImageReady(true);
        }
      })
    }
    else{ //without text
      setStateImageReady(false);
      catService.getRandomCat().then(dataImage => {
        if(dataImage){
          setImageState(valueImage => valueImage = dataImage);
          setStateImageReady(true);
        } 
      }).catch(error => {console.error("getRandomCat error: ",error);});
    }
  }



  return (
    <>
      <form method="post" onSubmit={submit}>
        <ImageVisor label={label} imageSrc={imageState} isImageReady={stateImageReady}/>
        <section className="input-data-section">
          <Input name={"text"} inputText={inputText} color={colorSelectedState}/>
          <DropListSelectorComponent
            name="dropList"
            label={"Font Size"} 
            optionsListInput={optionsList}
            itemSelectedOutput={getFontSizeSelected}
          />
        </section>
        <section className='color-data-section'>
          <ColorSelectorComponent 
            name="color-selector" 
            colorSelectedOutput={getColorSelected}
          />
        </section>
        {/*<button type="submit">Get image with Text</button>*/}
      </form>
      
    </>
  )
}

export default App
