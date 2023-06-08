import React from "react";
import './Test.css';

function Test(){
    const name = 'react'
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return(
        <div>{name}</div>
    )
}

export default Test;