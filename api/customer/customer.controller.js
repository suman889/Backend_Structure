// const { add, update, find,findall ,remove } = require("./payment.service");
const {datanotfound,servererror} = require ("../../locale/en.js");

const Find_=(request,response)=>{
    // let _id=request.params.id;
    // if(isNaN(_id))
    // response.status(400).json({message:"Invalid Request"});
    // else{
    //     find(_id,(err,result)=>{
    //         if(err)
    //         response.status(500).json({message:"Internal Server Error"});
    //         else if(result.length==0)
    //         response.status(404).json({message:"No data found"});
    //         else 
    //         response.status(200).json(result)
    //     });
    // }
    response.status(200).json({msg:"data found by id"});
}

const FindAll_=(request,response)=>{
    // findall(null,(err,result)=>{
    //     if(err)
    //     response.status(500).json({message:"Internal Server Error"});
    //     else if(result.length==0)
    //     response.status(404).json({message:"No data found"});
    //     else 
    //     response.status(200).json(result)
    // });
    response.status(200).json({msg:"all data found"})
;
}

const Add_=(request,response)=>{
   
    response.status(200).json({msg:"data added"});
}
const Update_=(request,response)=>{
    // if(isNaN(request.params.id))
    //     response.status(400).json({message:"Invalid Request"});
    // else{
    //     find(request.params.id,(err,result)=>{
    //         if(err)
    //         response.status(500).json({message:"Internal Server Error"});
    //         else if(result.length==0)
    //         response.status(404).json({message:"Invalid request"});
    //         else 
    //         {
    //             //update logic here
    //             response.status(200).json(result)
    //         }
    //     })
    // }
    response.status(200).json({msg:"update successfully"});
}

const Remove_=(request,response)=>{

    
    let _id=request.params.id;
    if(isNaN(_id))
    response.status(400).json({message:"Invalid Request"});
    else{
        remove(_id,(err,result)=>{
            if(err)
            response.status(500).json(servererror);
            else if(result.affectedRows==0)
            response.status(406).json({message:"No Data Found"});
            else 
            response.status(200).json({message:"Data Deleted Successfully"})
        });
    }  

    response.status(200).json({msg:"remove successfully"});


}
module.exports={Find_,FindAll_,Add_,Update_,Remove_}