import React from 'react';
import classes from './taskStyle.module.css';
import styles from './taskStyle.module.css';


/* function Task(props){
const classes = [styles.task];
if(props.selected){
    classes.push(styles.selected);
}

    return (
        <>
       <li className={styles.task + ' selected'}>{props.data}</li>
        <li className={`${styles.task} selected`}>{props.data}</li> 
        <li className={[styles.task, 'selected'].join(' ')}>{props.data}</li>
 
        <li className={classes.join(' ')}>{props.data}</li>
        </>
    );
} 
*/

function Task(props){
        return (
            <>
            <li className={`${classes.task} ${props.selected ? classes.selected : ''}`}>{props.data}</li>
            </>
        );
    }

export default Task;