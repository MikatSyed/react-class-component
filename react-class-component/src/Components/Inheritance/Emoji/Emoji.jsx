import React from "react";

export default class Emoji extends React.Component {
    addEmoji = (text,emoji) =>  `${emoji} ${text} ${emoji}` 
    render(override) {
        let text = `I am Emoji Component`
        // console.log(override);
        if(override) text = override;
        console.log(text);

        return <div>{text}</div>
    }

}