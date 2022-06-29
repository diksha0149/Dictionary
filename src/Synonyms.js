import React from "react";
import "./Dictionary.css"
export default function Synonyms(props){
    if(props.synonyms){
    return( 
        <>
         <div className="synony">Synonyms</div>
    <div  className="similar">
    {props.synonyms.map(function(synonym,index){
        return (<div key={index} className="synonym">{synonym}</div>);
    })}
    </div>
</>
    );
   }
   else{
    return null;
   }
}