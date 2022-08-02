import React from "react";
import HigherOrderComponent from "../HigherOrderComponent/HigherOrderComponent";

const HoverCounter = (props) => {
   
    const { count,handleClick } = props;

        return (
            <>
                <h2 type="button" onMouseOver={handleClick}>Hover {count} times </h2>
            </>
        )
    }

export default HigherOrderComponent(HoverCounter);
