import React from 'react';
import styles from './styles.module.css';

export default function Flex(props){
console.log('props', props);

const blocks = [];
for(let i=1; i<=50; i++){
    blocks.push(
        <div
         className={styles.block}
         key = {i}
         >
         {i}
         </div>
    );
}

    return(
        <div className={styles.main}> 
        
        {blocks}

        </div>
    );
}