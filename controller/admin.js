let ADMIN = require('../model/Adminn')

exports.SignUp = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
    
      let data = await ADMIN.create({
        name,
        email,
        password,
      });
  
      res.status(201).json({
        status: "success",
        message: "SignUp successfully",
        data,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: "An error occurred during SignUp",
        error: error.message,
      });
    }
  };
  
  exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      let data = await ADMIN.findOne({ email, password });
  
      if (!data) {
        throw new Error("User not found");
      }
      
      res.status(200).json({
        status: "success",
        message: "Login successfully",
        data: data,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: "An error occurred during Login",
        error: error.message,
      });
    }
  };
  

