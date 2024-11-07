function rotate(arr,k){
    let n=arr.length;
    k=k%n;
    let result=[];

    for(let i=0;i<n;i++){
        result[(i+k)%n]=arr[i];

    }
    for(let i=0;i<n;i++){
        arr[i]=result[i];
    }
    return
}