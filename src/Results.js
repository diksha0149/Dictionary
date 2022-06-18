import React from "react";
import Meaning from "./Meaning";
export default function Result(props){
    if(props.results){
        return(
            <>
            <div>{props.results.word}</div>
            {props.results.meanings.map(function(meaning,index){
                return <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>;
            })}
            </>
        );
   }
    else{
        return null;
    }
}