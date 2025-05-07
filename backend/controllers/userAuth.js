const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.js");

const validator = require("validator");




const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "email not valid" });
    }

    const user = await userModel.findOne({ email });

    const confirmPassword = await bcrypt.compare(password, user.password);

    if (!confirmPassword) {
      return res.json({
        success: false,
        msg: "email or password wrong",
      });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    res.json({
      success: true,
      token,
      msg: "login Successfull",
    });
  } catch (err) {
    console.log("error happend");
    res.json({
      success: false,
      msg: err.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "email not valid" });
    }

    if (password.length < 8) {
      return res.json({
        succees: false,
        msg: "password length not good",
      });
    }
    const chkEmail = await userModel.findOne({ email });
    if (chkEmail) {
      return res.json({
        success: false,
        msg: "email already exist",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ email: user.email }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    res.json({
      success: true,
      token,
    });
  } catch (err) {
    console.log("error happend");
    res.json({
      success: false,
      msg: err.message,
    });
  }
};
const admin =  async (req,res) => {
  try{
  let {email, password}=req.body

  if(!validator.isEmail(email))
  {
    return res.json({
      success:false,
      msg:"email or password wrong"
    })
  }

  if(email !== process.env.ADMIN_EMAIL)
  {
    return res.json({
      success:false,
      msg:"email or password wrong"
    })
  }

  if(password!== process.env.ADMIN_PASSWORD)
  {
    return res.json({
      success:false,
      msg:"email or password wrong"
    })
  }


  const token=  jwt.sign({email},process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  )



  return res.json({
    success: true,
    msg: "Logged in with HttpOnly cookie",
    token:token,
  });

  }
  catch(err)
  {
    console.log("this didnot worked", err); 
  }
};



module.exports = {
  login,
  register,
  admin,
};
