import React from "react";


const ClickCounter2 = (props) => {
   
    const { counter,handleClick } = props;

        return (
            <>
                <button type="button" onClick={handleClick}>button {counter} times clicked</button>
            </>
        )
    }

export default ClickCounter2 ;
