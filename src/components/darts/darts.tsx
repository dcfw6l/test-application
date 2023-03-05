import React from "react";
import "./darts.css";
import  {useState} from 'react';

export class DartsOldal extends React.Component<{}, {}> {

    
    render(){

      const numberInput = document.getElementById("number");
      const result = document.getElementById("result");


        return <div className="container">
        <div className="column left">
        <input placeholder="Név" className="input" name="text" type="text"></input>
          <h1 className="header">501 - <input type="number" id="inputLeft" /></h1>
        </div>
        <div className="column right">
          <input placeholder="Név" className="input" name="text" type="text"></input>
          <h1 className="header">501 - <input type="number" id="inputRight" /></h1>
        </div>
      </div>

    }
}