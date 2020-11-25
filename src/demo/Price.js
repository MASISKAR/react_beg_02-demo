import React, {Component} from 'react';

class Price extends Component {
constructor(props){
    super(props);

    this.state={
        price: props.text,
        rate: props.rate
    };
}


    handleClick = ()=>{
        let {price, rate} = this.state;
        let sign = price[price.length-1];
        if(sign === "$"){
            let amd = parseFloat(price)*rate + "֏";
            this.setState({
                price: amd
            });
        }
        else if(sign === "֏"){
            let usd = parseFloat(price)/rate + "$";
            this.setState({
                price: usd
            });
        }   
    };

    render(){
        return(
            <>
            <p>Price: {this.state.price}</p>
            <button
            onClick={this.handleClick}
            >
            Change the currency
            </button>
            </>
        );
    }
}

export default Price;