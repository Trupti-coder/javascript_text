//chunk means spliting an array into  smaller group of size k 

function chunkArray(arr,k){

    let result=[]; // for storing the chunks of ann array
    let chunk=[]; // for storing the current chunk

    for(let i=0;i<arr.length;i++){    // function ueses for loop for going through each element in an array
        chunk.push(arr[i]);
    }

    if(chunk.size===k){         // if chunk size is equal to the desired size then push chunk into the result.
        result.push(chunk);
        chunk=[];
    }





}