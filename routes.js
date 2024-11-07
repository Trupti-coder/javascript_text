
var express=require('express');

var router=express.Router();

var stud=require("./modules/student");
//body parser
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));   //do u want third party
router.use(bodyParser.json());
router.use(bodyParser.raw());





//send file
router.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html",function(err){
        if(err){
            res.send(err);
        }
    });
})


router.get("/student",function(req,res){       //: This defines a route for handling HTTP GET requests to the path “/student”.
    var result=stud.getStudents();              //stud.getStudent() retrieves some data related to students.
    //res.send(result);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result})
    }
})

//request parameter
router.get("/student/:rno/",function(req,res){
    var x=req.params.rno;//fetch using params

    var result=stud.getStudent(x);// retrieves some data related to students based on the extracted value.
    //res.send(result);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result});
    }
})

//query string

router.get("/getStudent",function(req,res){
    let rno=req.query.txtRollno;
    let name=req.query.txtName;
    let mrk=req.query.txtMarks;
    console.log(rno,name,mrk);
    var result=stud.getStudent(rno);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result});
    }
})
router.post("/newStudent",function(req,res){
    var rno=req.body.rollno;
    var name=req.body.name;
    console.log(rno,name);
    var obj=stud.addStudent(req.body);
    if(!obj){
        res.send("not interested");
    }
    else{
        res.json({msg:"data inserted!!"});
    }
    res.send(req.body);

})

module.exports=router;