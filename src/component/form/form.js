import React from "react";
import "./form.scss"
import {useState} from "react";
function Form(props) {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const bodyHandler = (e) => {
        e.preventDefault();
        setBody(e.target.value);
    }
    const handleMethod = (e) => {
        e.preventDefault();
        setMethod(e.target.value);
    }
    const handleUrl = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

       let data = {
            method: method,
            url: url,
            body: body,
        }
        // ( body ? data.body = body : null);
        if (body) {
            data.body = body;
        }
        props.sendData(data);
        props.methodSend(data);
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="api">
                <input className="link-api" type="text" name="url" placeholder="http://api.url.here" onChange={handleUrl}/>
                <button>Go!</button>
            </div>
            <div className="methods">
                <button className="method" value={"GET"} onClick={handleMethod}>GET</button>
                <button className="method"value={"POST"} onClick={handleMethod} >POST</button>
                <button className="method"value={"PUT"} onClick={handleMethod}>PUT</button>
                <button className="method"value={"DELETE"} onClick={handleMethod}>DELETE</button>
                <textarea placeholder="Body" onChange={bodyHandler}></textarea>

            </div>
        </form>
    )
}
export default Form;