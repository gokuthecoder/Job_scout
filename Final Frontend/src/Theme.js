import { useState } from "react";

export default function Theme() {
    const [text, setText] = useState("Hello world Theme is dark")
    const [changeClass, setchangeClass] = useState("bg-dark text-white")

const getlight=()=>{
    setchangeClass("bg-white text-dark")
    setText("Hello world Theme is light")
}
const getdark=()=>{
    setchangeClass("bg-dark text-white")
    setText("Hello world Theme is dark");
    
}

    return (
        <>
            <h1 className={changeClass} >{text}</h1>
            <div className="text-center">
                <button type="button" className="btn btn-light" onClick={getlight}>Light</button>
                <button type="button" className="btn btn-dark" onClick={getdark}>Dark</button>
            </div>
        </>
    );
}