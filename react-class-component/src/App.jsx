import Clock from './Components/Clock/Clock.jsx';
import './App.css'
import Calculator from './Components/Calculator/Calculator';
import Text from './Components/Inheritance/Text/Text';
import Text2 from './Components/Composition/Text2/Text2.jsx';
import Emoji2 from './Components/Composition/Emoji2/Emoji2.jsx';
import Bracket from './Components/Composition/Bracket/Bracket.jsx';
import HoverCounter from './Components/HOC/HoverCounter/HoverCounter.jsx';
import ClickCounter from './Components/HOC/ClickCounter/ClickCounter.jsx';
import HoverCounter2 from './Components/RenderProps/HoverCounter2/HoverCounter2';
import ClickCounter2 from './Components/RenderProps/ClickCounter2/ClickCounter2';
import User from './Components/RenderProps/User/User.jsx';
import RenderProp from './Components/RenderProps/RenderProp/RenderProp.jsx';

function App() {
  // console.log("App component render");
  return (
    <>
    
    <Clock locale="bn-BD"/>
    <Calculator/>
    <Text/>
     <Emoji2>{({addEmoji}) => (
     <Bracket>{({addBracket}) =>  <Text2 addEmoji={addEmoji} addBracket={addBracket} /> }</Bracket>
    )}
     </Emoji2> 
     {/* <ClickCounter/>
     <HoverCounter/> */}
     {/* <User render={(isLoggedIn)=> isLoggedIn ? 'Mikat Syed' : 'Guest'}/> */}

     {/* <RenderProp render={(counter,handleClick) =>  <ClickCounter2 counter={counter} handleClick={handleClick}/>}/>
     <RenderProp render={(counter,handleClick) =>  <HoverCounter2 counter={counter} handleClick={handleClick}/>}/> */}
     <RenderProp>
     {(counter,handleClick) =>  <ClickCounter2 counter={counter} handleClick={handleClick}/>}
     </RenderProp>
     <RenderProp>
     {(counter,handleClick) =>  <HoverCounter2 counter={counter} handleClick={handleClick}/>}
     </RenderProp>

    </>
  )
}

export default App
