import React, { useState } from 'react';
import { connect } from 'react-redux';

function Message(props) {

    const [message, setMessage] = useState('');


    return (
        <div>
            <input
                type='text'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />

            <button
                onClick={() => { 
                    props.onSendMessage(message); 
                    setMessage('');
                }}
            >
                Send message
            </button>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (value) => dispatch({ type: 'CHANGE_MESSAGE', message: value })
    };
};

export default connect(null, mapDispatchToProps)(Message);