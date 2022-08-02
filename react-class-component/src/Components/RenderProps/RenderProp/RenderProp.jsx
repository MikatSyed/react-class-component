import React, { Component } from 'react';

class RenderProp extends Component {
    state = {
        count : 0
    }
    handleClick = () => {
        this.setState((preState)=>({
            count : preState.count + 1
        }))
    }
    render() {
        // const {render} = this.props;
        const {children} = this.props;
        const {count} = this.state;
        // return render(count,this.handleClick)
        return children(count,this.handleClick)
    }
}

export default RenderProp;