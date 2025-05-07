const jwt= require('jsonwebtoken')

const adminAuth= async (req,res,next)=>{

    try{
        const {token}= req.headers
        if(!token){
            return res.json({
                success:false,
                msg:"pls login"
            })
        }
        const emailObj =jwt.verify(token, process.env.JWT_KEY)
        const email=emailObj.email
        if(email !== process.env.ADMIN_EMAIL)
        {
            return res.json({
                success:false,
                msg:"not authrozied for this"
            })
        }

        next();
    }
    catch(err)
{  
    return res.json({
        success:false,
        msg:`err happend${err}`,
    })
}



}

module.exports=adminAuth;