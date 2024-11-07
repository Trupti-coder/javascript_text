function SortArray(arr){
    const n=arr.length;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                //swap element
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        
    }
    return arr;

}
const array=[2,8,9,3,5];
SortArray(array);
console.log(array);
