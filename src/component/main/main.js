import React, { useEffect } from "react";
import "./main.scss";
import Form from "../form/form";
import Result from "../result/result";
import {useState} from "react";
import axios from "axios";

function Main() {
    const [result, setResult] = useState({});
    const [data, setData] = useState(null);
    const [headers, setHeaders] = useState({});
    const[loading, setLoading] = useState(false);

    const Loadingfunction = () => {
        return new Promise((resolve) => setTimeout(resolve, 1500));

    }

  
    useEffect(() => {
        if(loading){
            Loadingfunction().then(() => {
                setLoading(false);
            });
        };
        }, [loading]);
    //   console.log(result);
    const Method = (props) => {
        setResult(props);
    }
    const sendData = async (props) => {
            setLoading(true);
            var chosenMethod = props.method.toLowerCase();
            const response = await axios[chosenMethod](props.url,(props.body)? (props.body) : null);
            let result = {
                Results : response.data,
            }
            setData(result);
            var headers = {Headers :response.headers};
            setHeaders(headers);
    }

    return (
        <div className="main">
            <Form methodSend = {Method} sendData={sendData}/>
            <Result Method={result.method} url={result.url} data={data} headers={headers} loading={loading}/>
        </div>
      

    )
}
export default Main;