const router=require("express").Router();
const fetch=require("node-fetch");
const Tumor=require("../models/tumor");

router.post("/post-data",async(req,res)=>{
    let url="https://clinicalapi-cptac.esacinc.com/api/tcia/clinical_data/tumor_code/CCRCC";
    let response=await fetch(url);
    let tumors= await response.json();
    tumors.forEach(async(tumor)=>{
        let tumorData={
           case_id:tumor.case_id,
           tumor_site:tumor.tumor_site,
           BMI:tumor.BMI,
           height_in_cm:tumor.height_in_cm,
           weight_in_kg:tumor.weight_in_kg,
           specimens:tumor.specimens
        }
     let data=await Tumor.create(tumorData);
     if(!data){
      return res.status(501).send({
           status:"failure",
           message:"Unable to upload data"
       })
     }
    })
    return res.status(200).send({
        status:"success",
        message:"Data uploaded successfully"
    })
})
   
router.get("/get-data",async(req,res)=>{
       let tumerData=await Tumor.find({})
       if(!tumerData){
           return res.status(501).send({
               status:"failure",
               message:"No data found"
           })
       }
       return res.status(200).send({
           status:"success",
           message:"Data retrieval sucessfull",
           data:tumerData
       })
})
   
router.get("/single-tumor/:case_id",async(req,res)=>{
       if(!req.params.case_id){
           return res.status(400).send({
               status:"failure",
               message:"Missing case_id"
           })
       }
       let tumorData=await Tumor.findOne({case_id:req.params.case_id});
       if(!tumorData){
           return res.status(404).send({
               status:"failure",
               message:"Tumor data not found"
           })
       }
       return res.status(200).send({
           status:"success",
           message:"Tumor data retrieval Successfull",
           data:tumorData
       })
})
   
module.exports=router;
