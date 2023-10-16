import React from 'react';



function Button(props) {
    console.log("button component executed");
    return <button onClick={props.eventHandler} className=" btn btn-primary">{props.children}</button>
}




export default Button;