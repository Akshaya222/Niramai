const mongoose=require("mongoose");

const tumorSchema=mongoose.Schema({
    case_id:String,
    tumor_site:String,
    BMI:String,
    height_in_cm:Number,
    weight_in_kg:Number,
    // specimens:[{
    //     specimen_id:String,
    //     tissue_type:String,
    //     slide_id:String,
    //     weight_in_mg:String,
    //     percent_tumor_surface_area:Number,
    //     percent_tumor_nuclei:Number,
    //     percent_necrotic_surface_area:Number,
    //     weight_in_mg:Number
    // }]
    specimens:[{}]
})

module.exports=mongoose.model("Tumor",tumorSchema);   