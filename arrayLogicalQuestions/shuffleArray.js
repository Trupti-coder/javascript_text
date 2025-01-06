function shuffleArray(arr){
    for(let i=arr.length-1;i>0;i--){
        let randomIndex=Math.floor(Math.random()*(i+1));
        //swap element

        let temp=arr[i];
        arr[i]=arr[randomIndex];
        arr[randomIndex]=temp;
    }
    return arr;
}
