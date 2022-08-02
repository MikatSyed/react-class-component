import React from "react";
import Button from '../Button/Button';
export default class Clock extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {date : new Date()}
    // }

    state = {date : new Date(),locale : 'bn-BD'};
    componentDidMount(){
       this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
       clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({date: new Date()}) 
    }
    handleClick = (locale) => {
        this.setState({
          locale  
            
        })
    }
    render(){
        // console.log("Clock component render");
        const {date,locale} = this.state;
    //    let button;
    //    if(locale === "bn-BD"){
    //     button = ( <Button  change={this.handleClick} locale="en-US"></Button>)
    //    }else{
    //     button = ( <Button  change={this.handleClick} locale="bn-BD"></Button>)
    //    }
        return (
            <>
                <h2>Time is {date.toLocaleTimeString(locale)}</h2>
               {/* {button} */}
               { locale === 'bn-BD' ? <Button  change={this.handleClick} locale="en-US" /> : <Button  change={this.handleClick} locale="bn-BD" />  }
            </>
        )
    }
}