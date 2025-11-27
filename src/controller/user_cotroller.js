

export const create_user =(req,res)=>{
    try{
        const data = req.body

        res.status(201).send({status:true,message :`Welcome ${data.name}`})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

export const get_all_user =(req,res)=>{
    try{
       const data = [
        {name:"ayush"},
        {name:"ayush"},
        {name:"ayush"},
        {name:"ayush"},
        {name:"ayush"},
       ]

        res.status(200).send({status:true,message :`get Successfully`,data:data})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}