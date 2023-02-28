import React from "react";
import "./testszisz.css";

export class TestSzisz extends React.Component<{}, {}> {

render(){
    return <div className="contactContainer" style={{fontSize: '28px'}}>        
                <div className="contactTitle">Sziszke the biggest cock in the world:</div>     
                <div className="valamiSzovegClass">valami szöveg</div>  
                <div style={{display: 'flex'}}>
                    <p style={{color: 'green'}}>első</p> 
                    <p style={{fontWeight: 'bold', marginLeft: '30px'}}>második</p>
                    <p style={{marginLeft: '30px'}}>harmadik</p>
                </div>    
                <button style={{backgroundColor: 'blue', width: 200, height: 50, fontSize: '40px', color: 'white', border: '2px solid black', borderRadius: '10px'}}>lófasz</button>       
                <table>
                    <thead>
                        <tr>
                           <th>H</th> 
                           <th>K</th> 
                           <th>Sze</th> 
                           <th>Cs</th> 
                           <th>P</th> 
                           <th>Szo</th> 
                           <th>V</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
           </div>                
    }
}