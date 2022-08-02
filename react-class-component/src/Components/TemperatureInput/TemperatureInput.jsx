import React from "react";


const scaleNames = {
    c : "Celsius",
    f : "Fahrenheit"
}
export default function TemperatureInput({temperature,handleTemp,scale}){
  
        return (
            
            <>
                <fieldset>
                    <legend>Enter Temperature in {scaleNames[scale]}</legend>
                    <input type="text" value={temperature} onChange={(e)=>handleTemp(e,scale)}/>
                   
                </fieldset>
               
            </>
        )
    }
