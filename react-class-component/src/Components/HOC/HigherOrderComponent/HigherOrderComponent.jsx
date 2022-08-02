import React from "react";

 const HigherOrderComponent = (OriginalComponent) =>{
    class newComponent extends React.Component {
        state = {
            count : 0
        }
        handleClick = () => {
            this.setState((preState)=>({
                count : preState.count + 1
            }))
        }
        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} handleClick={this.handleClick}/>
        }
    }

    return newComponent;
}
export default HigherOrderComponent;