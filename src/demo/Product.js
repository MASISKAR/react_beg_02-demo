import React, {Component} from 'react';
import Name from './Name';
import Description from './Description';
import Price from './Price';


class Product extends Component {

    render(){
 
        return(
            <div>
            <Name text = {this.props.name}/>
            <Description text = {this.props.description}/>
            <Price text = {this.props.price} rate={this.props.rate}/>
            </div>
        );
    }
}

export default Product;