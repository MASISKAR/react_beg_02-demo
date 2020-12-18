

function request(url, method="GET", body){
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
    };

    if(body){
        config.body = JSON.stringify(body);
    }

    return fetch(url, config)
        .then((res) => res.json())
        .then(response => {
            if (response.error) {
                throw new Error(response.error);
            }
            return response;
        });
 
}


// async function request(url, method = "GET", body) {
//     const config = {
//         method: method,
//         headers: {
//             "Content-Type": "application/json"
//         },
//     };

//     if (body) {
//         config.body = JSON.stringify(body);
//     }

//     try{
//             const res = await fetch(url, config);
//     const response = await res.json();
//     if (response.error) {
//         throw response.error;
//     }
//     return response;
//     }
//     catch(err){
//         console.log('err', err);
//     }
// }




export default request;