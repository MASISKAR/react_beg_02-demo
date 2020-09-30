import React from 'react';
// import B from './B';
// import C from './C';
// import D from './D';
import E from './E';




class A extends React.Component {
    state = {
        count: 0,
        inputValue: '',
        value: ''
    };

    handleClick = () => {
        /*         this.setState({
                    count: this.state.count+1
                }, 
                ()=>{
                    console.log(this.state.count);
                }); */

        this.setState((state) => {
            return {
                count: state.count + 1
            };
        },
            () => {
                console.log('first');
            });

    };

    handleChange = (event) => {

        this.setState({
            inputValue: event.target.value
        })
    };

getValue = (value)=>{

    this.setState({
        value
    });
};


    render() {
        // console.log('A state', this.state)
        return (

            <div>
{/*                 <p>{this.state.count}</p>
                <button
                    onClick={this.handleClick}
                >
                    Click me
            </button>
                <div>
                    <input
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <p>{this.state.inputValue}</p>

----------------------------
                <B 
                count = {this.state.count}
                name= "some name"
                onSendValue = {this.getValue}
                />

                <C text={this.state.value}/>

                -----------------------------
                <D/> */}

                <E/>
            </div>


        );
    }
}

export default A;