'use strict';
const delay = (ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('timeout'));
        },ms)
    })
};

const fetchWithTimeout = (timeout,...args) => {
    return Promise.race([fetch(...args),delay(timeout)]);
};

const RequestUtils = {

    async getContents(url){
        let contentUrlArray = new Array(url);
        console.log(contentUrlArray);
        let promises = contentUrlArray.map(
            (url)=>fetchWithTimeout(5000,url).then(response => response.json())
        );
        let responseDatasCopy;
        await Promise.all(promises).then(responseDatas =>{
            responseDatasCopy = responseDatas;
        });
        console.log(responseDatasCopy);
        return responseDatasCopy;
    }
};

module.exports = RequestUtils;