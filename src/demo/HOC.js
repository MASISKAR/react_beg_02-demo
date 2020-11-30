import React from 'react';


export default function HOC(props){
console.log('props', props);

    return(
        <div> 
        <div></div>
        {props.children}
        </div>
    );
}