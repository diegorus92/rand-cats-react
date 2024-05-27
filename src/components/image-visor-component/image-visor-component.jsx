import { useState, useEffect } from 'react';
import './image-visor-component.css';
import CatService  from '../../services/cat-api-service.jsx';

const catService = new CatService();

export const ImageVisor = ({label ,imageSrc, isImageReady}) => { 
    const ImageLoaded = ({isLoaded}) =>{
        if(isLoaded)
            return <img className="ivc-image-display" src={imageSrc} alt=""/>
            //return <img className="ivc-image-display" src={stateImageSrc} alt=""/>
        else
            return  <p className="ivc-loading-msg">Loading...</p>
    }

    return(
        <>
            <div className="ivc-container">
                <h2>{label}</h2>

                <ImageLoaded isLoaded={isImageReady}/>

                 <button type="submit">Get Image</button>
            </div>
            
        </>
    )
}