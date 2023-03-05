import React from "react";
import "./testszisz.css";


export class TestSzisz extends React.Component<{}, {}> {

render(){

    return <div className="headerContainersajat">    
                <div className="titleTextsajat">Szász Szilárd</div>     
                <div className="valamiSzovegClass"><b>valami szöveg</b></div>
                <img src="szilard.jpg"  alt="Legnagyobb sztár"></img>
            <div className="contactContainerForTable_sajat">
            <table style={{width: '80%'}}>        
            <thead>
                <tr>
                    <th>Kor:</th>
                    <th>Testtömeg:</th>
                    <th>Fekvenyomás:</th>
                    <th>Guggolás:</th>
                    <th>Felhúzás:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19</td>
                    <td>89 kg</td>
                    <td>110 kg</td>
                    <td>150 kg</td>
                    <td>180 kg</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>95 kg</td>
                    <td>130 kg</td>
                    <td>180 kg</td>
                    <td>210 kg</td>
                </tr>
            </tbody>
        </table>
        </div>
                <div>
                    <div></div>
                    <div></div>
                </div> 
            </div>         

    }
}