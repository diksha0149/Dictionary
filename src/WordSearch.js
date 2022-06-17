import React,{useState} from "react";
export default function WordSearch(){
    let [keyword,setKeyword]=useState("");
    function Search(event){
        event.preventDefault();
        alert(keyword);
    }
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
