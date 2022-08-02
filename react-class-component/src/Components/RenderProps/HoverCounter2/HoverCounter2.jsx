import React from "react";


const HoverCounter2 = (props) => {
   
    const { counter,handleClick } = props;

        return (
            <>
                <h2 type="button" onMouseOver={handleClick}>Hover {counter} times </h2>
            </>
        )
    }

export default HoverCounter2;
