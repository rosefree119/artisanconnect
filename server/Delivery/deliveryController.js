const deliverys=require('./deliverySchema')
const multer=require('multer')


const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("licence");
//delivery Registration 
const registerdelivery=async (req,res)=>{
  console.log(req.file);
  console.log(req.body);
    const newdelivery=new deliverys({
        name:req.body.name,
        vehicleRegNumber:req.body.vehicleRegNumber,
        housename:req.body.housename,
        email:req.body.email,
        city:req.body.city,
        pincode:req.body.pincode,
        contact:req.body.contact,
        district:req.body.district,
        password:req.body.password,
        age:req.body.age,
        aadhar:req.body.aadhar,
        licence:req.file
    })
    try {
      await newdelivery.save();
      res.status(200).json({ msg: "Registered Successfully",status:200 });
    } catch (err) {
      if (err.code === 11000) {
        // Duplicate key error
        res.json({
          status: 400,
          msg: `Aadhar number ${err.keyValue.aadhar} already exists`,
        });
      } else {
        res.status(500).json({ status: 500, msg: "Data not Inserted", error: err });
      }
    }
}
//delivery Registration -- finished

//Login delivery 
const logindelivery=(req,res)=>{
    const email=req.body.email
    const password=req.body.password

    deliverys.findOne({email:email}).exec().then(data=>{
      if(data.isactive==true){
      if(password==data.password){
        res.json({
          status:200,
          msg:"Login successfully",
          data:data
      })
    }else{
      res.json({
        status:400,
        msg:"password Mismatch",
        
    })
    }
  }else{
   return res.json({
      status:407,
      msg:"Please get an Approval from Admin for Login"
   
  })
  }
    
  }).catch(err=>{
  res.json({
      status:401,
      msg:"delivery agent not found",
      Error:err
  })
  })
    };
  
  
  //Login delivery --finished
  
  
  //View all deliverys
  
  const viewdeliverys=(req,res)=>{
    deliverys.find({isactive:true}).exec()
    .then(data=>{
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  // view deliverys finished
  
  //View all deliverys
  
  const viewdeliveryReqs=(req,res)=>{
    deliverys.find({isactive:false}).exec()
    .then(data=>{
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  // view delivery reqs finished


  //accept all deliverys
  
  const acceptDelReqs=(req,res)=>{
    deliverys.findByIdAndUpdate({_id:req.params.id},
      {isactive:true}).exec()
    .then(data=>{
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })
  
  }
  
  // view deliverys finished


  //update delivery by id
  const editdeliveryById=(req,res)=>{
  
    deliverys.findByIdAndUpdate({_id:req.params.id},{
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      housename:req.body.housename,
      email:req.body.email,
      city:req.body.city,
      pincode:req.body.pincode,
      contact:req.body.contact,
      district:req.body.district,
      age:req.body.age,
      aadhar:req.body.aadhar,
      licence:req.file
      })
  .exec().then(data=>{
    res.json({
        status:200,
        msg:"Updated successfully"
    })
  }).catch(err=>{
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }
// view cust by id
  const viewdeliveryById=(req,res)=>{
    deliverys.findById({_id:req.params.id}).exec()
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }
  
  const deletedeliveryById=(req,res)=>{

    deliverys.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
    emps=data
      console.log(data);
      res.json({
          status:200,
          msg:"Data removed successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }
  //forgotvPawd delivery by id
  const forgotPwd=(req,res)=>{
  
    
      
    deliverys.findOneAndUpdate({email:req.body.email},{
     
      password:req.body.password
      })
  .exec().then(data=>{
    if(data!=null)
    res.json({
        status:200,
        msg:"Updated successfully"
    })
    else
    res.json({
      status:500,
      msg:"delivery Not Found"
     
  })
  }).catch(err=>{
    console.log(err);
    res.json({
        status:500,
        msg:"Data not Updated",
        Error:err
    })
  })
  }
  



module.exports={registerdelivery,
  viewdeliverys,
  editdeliveryById,
  logindelivery,
  forgotPwd,
  viewdeliveryById,
  deletedeliveryById,
  upload,
  viewdeliveryReqs,
  acceptDelReqs

}