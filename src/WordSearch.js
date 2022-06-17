import React,{useState} from "react";
import axios from "axios";
export default function WordSearch(){
    let [keyword,setKeyword]=useState("");
    function handlereasponse(reasponse){
         console.log(reasponse);
    }
    function Search(event){
        event.preventDefault();
        alert(keyword);
        let apiurl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiurl).then(handlereasponse);
    }
    // https://api.dictionaryapi.dev/api/v2/entries/en/{keyword}
    function handlekeywordchange(event){
         setKeyword(event.target.value);
    }
    return(
    <div className="Search">
        <form onSubmit={Search}>
            <input type="search" onChange={handlekeywordchange}/>
        </form>
    </div>
    )
}
