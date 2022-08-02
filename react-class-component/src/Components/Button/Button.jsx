import React from 'react';

export default class Button extends React.Component {
 shouldComponentUpdate(nextProps) {
    // console.log(nextProps);
    const {change : currentChange, locale : currentLocale } = this.props;
    const {change : nextChange, locale : nextLocale} = nextProps;
    if(currentChange === nextChange && currentLocale === nextLocale) {
        return false
    }
    return true;
 }

   render(){
    // console.log("button component render");
    const {change,locale,show,enable} = this.props;
    // if(!enable) return null;
    
    return (
        <>
       <button type="button" onClick={()=> change(locale)}> {locale === "bn-BD" ? "Change Clock🥇" : "ঘড়ি পরিবর্তন" }</button>
       {/* { show && <h2>Hello</h2>} */}
        </>
    )
   }
}