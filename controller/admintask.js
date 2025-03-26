
let ADMIN = require('../model/Admintask')
  
exports.createtask = async (req, res, next) => {
    try {
      const { taskname, status } = req.body;
    
      let data = await ADMIN.create({
        taskname,
        status,
      });
  
      res.status(201).json({
        status: "success",
        message: "task created successfully",
        data,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: "An error occurred during creating",
        error: error.message,
      });
    }
  };

    exports.gettask = async (req, res, next) => {
      try {
        const { no,taskname,status } = req.body;
    
        let data = await ADMIN.find({ taskname, status });
    
        res.status(200).json({
          status: "success",
          message: "data read successfully",
          data
        });
      } catch (error) {
        res.status(404).json({
          status: "error",
          message: "An error occurred during reading",
          error: error.message,
        });
      }
    };
    