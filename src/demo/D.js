import React, {memo} from 'react';

function D(){
console.log('D component');

    return (
    <div>
        D component
         </div>
    );
}

export default memo(D);