import React from "react";
export default function Example(props){
    if(props.example){
        return (<><strong>Example :</strong> <em>{props.example}</em><br/></>);
    }
    else{
        return null;
    }
}