import React, {useState, useEffect, memo, useRef} from 'react';

function Hooks(){

const [counter, setCounter] = useState(0);
const [text, setText] = useState('');

const [values, setValues] = useState({
    val1: '',
    val2: ''
});


const increment = ()=>{
    setCounter(counter+1);

};

const handleChange = (event)=>{
    
    setText(event.target.value);
};

const changeValue = (event)=>{
    setValues({
        ...values,
        val1: event.target.value
    });

};

// componentDidUpdate
useEffect(()=>{
    console.log('useEffect componentDidUpdate');
});

// componentDidUpdate 
useEffect(()=>{
    console.log('useEffect counter');
}, [counter, text]);


//componentDidMount, componentWillUnmount
useEffect(()=>{
    console.log('useEffect componentDidMount');

    return ()=>{
        console.log('useEffect componentWillUnmount');
        };

}, []);

//componentWillUnmount
// useEffect(()=>{
//     console.log('useEffect');

//     return ()=>{
//     console.log('useEffect componentWillUnmount');
//     };
// }, []);

const inputRef = useRef(null);
console.log("🚀 inputRef", inputRef);

    return (
        <div>
        <h4>Welcome to React Hooks!</h4>
        <h3>{counter}</h3>
    
        <button
        onClick = {increment}
        >
        Click me
        </button>

        <div>
        <input 
        type = 'text'
        onChange={handleChange}
        />
        <p>{text}</p>
        </div>

        <div>
        <input 
        type = 'text'
        ref = {inputRef}
        onChange={changeValue}
        />
        
        </div>
        </div>
    );
}

export default memo(Hooks);