import React from "react";
import "./main.scss";
import Form from "../form/form";
import Result from "../result/result";
import {useState} from "react";

function Main() {
    const [result, setResult] = useState({});
    console.log(result);
    const Method = (props) => {
        setResult(props);
    }
    return (
        <div className="main">
            <Form methodSend = {Method} />
            <Result Method={result.method} url={result.url}/>
        </div>

    )
}
export default Main;