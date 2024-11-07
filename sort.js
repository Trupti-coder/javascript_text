function sort(arr){
    const n=arr.length;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]<arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

            }
        }

    }
    return arr;
}
const array=[3,1,8,10,5,8,4];
const newarray=sort(array);
console.log("sorted array "+newarray);