export const formatDate = (str='')=> str.slice(0, 10);

export const trimString = (str, maxLength=0)=> {
    if(!maxLength || str.length<=maxLength){
        return str;
    }
    return str.slice(0, maxLength)+'...';
    };