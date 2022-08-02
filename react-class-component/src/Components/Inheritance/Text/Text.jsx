
import Emoji from "../Emoji/Emoji";

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    render() {
       const modifiedText = this.addEmoji('I love javaScript', '💗')

       return  super.render(modifiedText)
    }
}