import React from 'react';
import './result.scss';
import JSONPretty from 'react-json-pretty';
function Result(props) {

    return (
        <div className="result">
            <div className="result-header">
                <p>
                    {props.Method}  {props.url}
                </p>
            </div>
            <div className="result-body">
             <JSONPretty>
 
             </JSONPretty>
            
            </div>
        </div>
    )
}
export default Result;