import React from "react";
import HigherOrderComponent from "../HigherOrderComponent/HigherOrderComponent";

const ClickCounter = (props) => {
   
    const { count,handleClick } = props;

        return (
            <>
                <button type="button" onClick={handleClick}>button {count} times clicked</button>
            </>
        )
    }

export default HigherOrderComponent(ClickCounter);
