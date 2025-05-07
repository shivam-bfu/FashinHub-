const jwt =require('jsonwebtoken')
const userModel = require('../models/user')

const authCheck= async (req,res, next)=>{

    try{

        const{ token }= req.headers

        
        if(!token)
            {
                return res.json({
                    success:false,
                    msg:"Pls Login"
                })
            }
            
            const emailObj= jwt.verify(token, process.env.JWT_KEY)
          
            const email= emailObj.email
           
        
        const user = await userModel.findOne({email : email})

        req.body.user_id= user._id

        
next()

    }
    catch(err)
    {
        

        
        res.json({
                success:false,
                msg:`SomeThing Went Wrong ${err.message }`,
        })

    }

}

module.exports=authCheck