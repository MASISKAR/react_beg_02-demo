import React, {useState, useEffect, useLayoutEffect, memo, useRef} from 'react';

function Hooks(){

const [counter, setCounter] = useState(0);
const [text, setText] = useState('');

const [values, setValues] = useState({
    val1: '',
    val2: ''
});

const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
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

// componentDidMount, componentDidUpdate
useEffect(()=>{
    console.log('useEffect componentDidUpdate');
});

// componentDidUpdate 
useEffect(()=>{
    console.log('useEffect counter');
}, [counter, text]);


//componentDidMount, componentWillUnmount
useEffect(()=>{
    console.log('useEffect componentDidMount++++++++++');

document.body.onresize = (event)=>{
    const size = {
        width: event.target.innerWidth,
        height: event.target.innerHeight
    };
    
    setWindowSize(size);

};

    return ()=>{
        console.log('useEffect componentWillUnmount');

        document.body.onresize = null;
        };

}, []);


useEffect(()=>{
    console.log('useEffect from size');
}, [windowSize]);

//componentWillUnmount
// useEffect(()=>{
//     console.log('useEffect');

//     return ()=>{
//     console.log('useEffect componentWillUnmount');
//     };
// }, []);


useLayoutEffect(()=>{

});

const inputRef = useRef(null);

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
        
        <h4>Width: {windowSize.width}</h4>
        <h4>Height: {windowSize.height}</h4>

        </div>
        </div>
    );
}

export default memo(Hooks);