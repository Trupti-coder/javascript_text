function butterfly(rows){
  for(let i=1;i<=rows;i++){
    let str='';
    for(let j=1;j<=i;j++){
        str+='*';
      }
      for(let k=1;k<=(2*rows-2*i); k++){
        str+='';
      }
      for(let j=1;j<=i;j++){
        str+="*";
      }
      console.log(str);
  } 

  //lower part
  for(let i=rows;i>=1;i--){
    let str='';
    for(let j=1;j<=i;j++){
        str+='*';
    }

    for(let k=1;k<=(2*rows-2*i);k++){
        str+='';
    }
    for(let j=1;j<=i;j++){
        str+='*';
    }
    console.log(str);
  }
}