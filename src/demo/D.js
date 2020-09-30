import React from 'react';

class D extends React.Component {
    state = {
        name: 'John Doe',
        showName: true
    }

    toggleName = () => {

        this.setState({
            showName: !this.state.showName
        });
    };

    render() {
        const { name, showName } = this.state;
        return (
            <>
                {showName ? 
                    <p>{name}</p> : 
                    <p>There's nothing to show</p>
                }
                {showName ? 
                    <p>{name}</p> : 
                    null
                }
                { showName && <p>{name}</p> }
                <div>
                    <button
                        onClick={this.toggleName}
                    >
                        Click
</button>
                </div>
            </>
        );
    }
}

export default D;