import React, { PureComponent } from 'react';
import {formatDate} from '../../../helpers/utils';
import Spinner from '../../Spinner/Spinner';

export default class SingleTask extends PureComponent {
state = {
    task: null
};

componentDidMount(){
    const taskId = this.props.match.params.id;

    fetch(`http://localhost:3001/task/${taskId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then(response => {
            if (response.error) {
                throw response.error;
            }

            this.setState({
                task: response
            });

        })
        .catch((error) => {
            console.log("ToDo -> error", error)
        });
}

    render() {
            const {task} = this.state;
        return (
            <>
           {!!task ?
             <div>
            <h2>{task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Date: {formatDate(task.date)}</p>
            <p>Created at: {formatDate(task.created_at)}</p>

            </div> :
        <Spinner/>}
        </>
        );
    }

}