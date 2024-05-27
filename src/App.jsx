import './App.css'
import React, {useEffect, useState} from 'react';
import { ImageVisor } from './components/image-visor-component/image-visor-component'
import Input from './components/input-component/input-component.jsx'
import CatService  from './services/cat-api-service.jsx';



const label = "Hi!"
const catService = new CatService();


function App() {
  const [textState, setTextState] = useState("");
  const [imageState, setImageState] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q2NqVIDYiHgQOhwue-PVLQHaEv%26pid%3DApi&f=1&ipt=6614374f2a5e1f7259f20a2cd128511d836cbf5d47832cd25bddddab076386ec&ipo=images");
  const [stateImageReady, setStateImageReady] = useState(true);
  

  const inputText = (inputValue) => {
    setTextState(inputValue);
  }

  function submit(e){
    e.preventDefault();
    let text = textState;
    if(text){
      setStateImageReady(false);
      catService.getRandomCatWithText(text).then((imageResult) => {
        console.log("catservice: ", imageResult); 
        if(imageResult){
          setImageState(imageResult);
          setStateImageReady(true);
        }
      })
    }
    else{
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
        <Input name={"text"} inputText={inputText}/>
        {/*<button type="submit">Get image with Text</button>*/}
      </form>
      
    </>
  )
}

export default App
