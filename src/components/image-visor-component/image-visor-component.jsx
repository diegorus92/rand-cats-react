import { useState } from 'react';
import './image-visor-component.css';
import CatService  from '../../services/cat-api-service.jsx';

const catService = new CatService();

export const ImageVisor = ({label ,imageSrc}) => { 
    const [stateImageSrc, setStateImageSrc] = useState(imageSrc);
    const [stateImageReady, setStateImageReady] = useState(true);
    
    function changeImage(){
        setStateImageReady(false);

        catService.getRandomCat().then(dataImage => {
            if(dataImage) 
                setStateImageReady(previousState => !previousState);
            setStateImageSrc(valueImage => valueImage = dataImage);
        }).catch(error => {console.error("getRandomCat error: ",error);});

        /*fetch(url).then(response =>{

            response.blob().then(blobResponse => {
                const urlImageResult = URL.createObjectURL(blobResponse);
                if(blobResponse) setStateImageReady( previousState=> !previousState);
                setStateImageSrc(urlImageResult);
            }).catch(error => console.error("Blob fetching error: ", error));
    
        }).catch(error => console.error("Response fetching error: ", error));*/
    }

    const ImageLoaded = ({isLoaded}) =>{
        if(isLoaded)
            return <img className="ivc-image-display" src={stateImageSrc} alt=""/>
        else
            return  <p className="ivc-loading-msg">Loading...</p>
    }

    return(
        <>
            <div className="ivc-container">
                <h2>{label}</h2>

                {/**If stateImageRedy from stateHook is false, ImageLoaded component will show 'Loading...' p,
                 * otherwise show the image into <img> tag
                 */}
                <ImageLoaded isLoaded={stateImageReady}/>

                <button onClick={changeImage}>Change image</button>
            </div>
            
        </>
    )
}