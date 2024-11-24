let n=5;
let charCode=97;
for(let i=1;i<=n;i++){
    let line="";

    for(let j=0;j<n-i;j++){
        line+=" ";
    }
    for(let j=0;j<2*i-1;j++){
        line += String.fromCharCode(charCode);
        charCode++;
        if(charCode>122) charCode=97;

    }
    console.log(line);
} 

