import React from 'react';

class C extends React.Component {

    render() {
    //  console.log('C render', this.props)
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default C;