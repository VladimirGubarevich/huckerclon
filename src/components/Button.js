import React from 'react';

const Button = (props) => {
    return (
        <button className={props.classes} type={props.type} onClick={props.buttonHandler} >{props.title}</button>
    )
}

export default Button;