function SortString(str){

    arr=str.split('');
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){

                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

            }
        }

    }
    return arr.join('');

}
 let inputstring="trupti";
 let newstring=SortString(inputstring);
 console.log(newstring);
