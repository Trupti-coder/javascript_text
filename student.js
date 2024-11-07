


var obj={
    arr:[{rollno:1,name:"aaa",marks:10},
    {rollno:2,name:"bbb",marks:60}

    ],
    getStudents:function(){
        return this.arr;
    },
    getStudent:function(rno){
    for(let i=0;i<this.arr.length;i++){
        if(this.arr[i].rollno==rno){
            return this.arr[i];
        }


    }
    },
    addStudent:function(obj){
        this.arr.push(obj);
        return obj;
    }
    

   
    
}
module.exports=obj;