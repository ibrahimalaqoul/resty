import axios from "axios";
import React from "react";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import "./history.scss"



function History(props) {
    const [dataHistory, setDataHistory] = useState({});



    const  handledata= async(e)=> {

        e.preventDefault();
       let array= e.target.innerText.split(' ');
        let method=array[0];
        let url=array[1];
        let body={};
        console.log(method,url);
        props.result.history.forEach(element => {
          body =  element.method===method && element.url=== url ? element.body : null;
        });
        console.log(body);
        let response = await axios[method.toLowerCase()](url, (body) ? (body) : null);
        setDataHistory({
            Headers: response.headers,
            Results: response.data,
    
        });

    }

    if (props.result.history.length > 0) {

        return(

            <div className="history">
            
    
                <ul>
                   
                    {
                        props.result.history.map((item, index) => {

                            
                            return (
                                <li key={index + "new"} onClick={handledata}>
                                    <span key={index} className="span-method"> {item.method} {item.url}</span>
                                </li>

                            )
                        })

                    }
                </ul>
                <div className="data-fetched">
                    {dataHistory ? <JSONPretty data={dataHistory}/> : "There is no Data For the history"}

                    </div>
            </div>

        )
    }else{
          return (
        <div className="history-empty">
            <p>History is Empty!</p>
        </div>
        )
    }
}
export default History;