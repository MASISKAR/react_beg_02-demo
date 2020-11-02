import React, { Component } from 'react';

class A extends Component {
constructor(props){
    super(props);

    this.state = {
        counter: props.initialCount,
        fruits: ['Apple', 'Banana', 'Pear', 'Cherry']
    };
}

handleClick = ()=>{
    this.setState({
        counter: this.state.counter + 1
});
};



    render() {
/* const fuits = [
    <div key='asdas'>Apple</div>,
    <div key='dsdfsd'>Banana</div>,
    <div key='dafsd'>Pear</div>,
    <div key='dfsdg'>Grape</div>
]; */


        const {text} = this.props;
        const {counter, fruits} = this.state;

        const fruitsElems = fruits.map((fruit, index, arr)=>{
                return (
                    <div key={index}>{fruit}</div>
                );
        });

        return (
            <>
            <div>{text}</div>
            <div>{counter}</div>

            { counter > 5 ?
                <div>The counter is more than 5</div> :
                <div>The counter is less than 5</div>
            }

            { counter > 3 ?
                <div>The counter is more than 3</div> : null
            }

            { counter > 3 && <div>The counter is more than 3</div> }

            <button
/*             onClick = {(function(){ 
                console.log(this);
                this.setState({
                        counter: this.state.counter + 1
                });

             }).bind(this)} */
             onClick = {this.handleClick}
            >
            +
            </button>

            {fruitsElems}
            </>
        );
    }

}

export default A;