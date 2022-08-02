import React from "react";
import BoilingVerdict from "../BoilingVerdict/BoilingVerdict.jsx";
import { Convert, toCelsius, toFahrenheit } from "../lib/Converter/Converter.js";
import TemperatureInput from "../TemperatureInput/TemperatureInput.jsx";
export default class Calculator extends React.Component {
   
    state = {
        temperature : '',
        scale : 'c'
    };
   handleTemp = (e,scale) => {
       this.setState({
        temperature : e.target.value,
        scale
    })
    }

    render(){
   const {temperature,scale} = this.state;
   const celsius = scale === 'f' ? Convert(temperature,toCelsius) : temperature;
   const fahrenheit = scale === 'c' ? Convert(temperature,toFahrenheit) : temperature;

        return (
            
            <>
                <TemperatureInput scale ="c" temperature={celsius} handleTemp={this.handleTemp}/>   
                <TemperatureInput scale ="f" temperature={fahrenheit} handleTemp={this.handleTemp}/>   
                
                <BoilingVerdict celsius = {parseFloat(temperature)} />
            </>
        )
    }
}