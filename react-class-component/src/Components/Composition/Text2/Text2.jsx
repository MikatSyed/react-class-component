export default function Text2({addEmoji,addBracket}) {
    let text = "I love JavaScript Programming Language"
    if(addEmoji) {
        text =  addEmoji(text,'❤️')
    }
    if(addBracket) {
        text =  addBracket(text)
    }
    
   return (
    <>
        <h2>{text}</h2>
    </>
   )
}