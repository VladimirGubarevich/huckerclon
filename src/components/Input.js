import React, { useRef } from 'react';

const Input = (props) => {
    const ref = useRef();

    function changeInput() {
        props.inputHandler(ref.current.value)
    }

    return (
        <input className={props.classes} ref={ref} type={props.type} placeholder={props.placeholder} value={props.value} onChange={changeInput} />
    )
}

export default Input;