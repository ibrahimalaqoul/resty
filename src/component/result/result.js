import React from 'react';
import './result.scss';
import JSONPretty from 'react-json-pretty';
function Result(props) {
if(!props.loading){
     return (
        <div className="result">
            <div className="result-header">
                <p>
                    {props.Method}  {props.url}
                </p>
            </div>
            <div className="result-body">

             <JSONPretty data={props.headers}/>
                
             <JSONPretty data={props.data}/>
            
            </div>
        </div>
    )
} else {
    return (
        <div className="result">
            <div className="result-header">
                <p>
                    {props.Method}  {props.url}
                </p>
            </div>
            <div className="result-body">

           <p>Loading...</p>
            
            </div>
        </div>
    )
}
   
}
export default Result;