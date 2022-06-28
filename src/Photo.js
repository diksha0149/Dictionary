import React from "react";
import "./Dictionary.css"
export default function Photo(props){
    if(props.photos){
        return(
            <div className="photo">
            {props.photos.map(function(photo,index){
                return <img src={photo.src.landscape} className="photoimg"/>;
            })}
            </div>
        );
   }
    else{
        return <div className="photoimg">hello from photo</div>;
    }
}