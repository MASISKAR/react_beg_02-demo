import React from 'react';
import styles from './blockStyle.module.css';

export default function Block(props){
    return (
        <div className={styles.block}>{props.number}</div>
    );

};