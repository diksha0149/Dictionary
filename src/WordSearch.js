import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
export default function WordSearch(){
    let [keyword,setKeyword]=useState("");
    let[results,setResults]=useState(null);
    function handlereasponse(reasponse){
        setResults(reasponse.data[0]);
    }
    function Search(event){
        event.preventDefault();
        let apiurl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiurl).then(handlereasponse);
    }
    function handlekeywordchange(event){
         setKeyword(event.target.value);
    }
    return(
    <div className="Search">
        <form onSubmit={Search}>
            <input type="search" onChange={handlekeywordchange}/>
        </form>
        <Results results={results}/>
    </div>
    )
}
