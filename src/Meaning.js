import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example"
export default function Meaning(props){
    console.log(props.meaning);
  return(
    <div className=" meaning">
  <h3>{props.meaning.partOfSpeech}</h3>
  {props.meaning.definitions.map(function(definition,index){
    return(
        <div key={index}>
            <p>
            <strong>Definition:</strong>{definition.definition}
            <br/>
            <Example example={definition.example}/>
            {/* <strong>Example</strong><em>{definition.example}</em> */}
            <Synonyms synonyms={definition.synonyms}/>
            </p>
        </div>
    )
     
  })}
  
  </div>
  );
}