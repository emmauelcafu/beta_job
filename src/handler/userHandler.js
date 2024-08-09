const {userController}= require("../controller/userController")

const userHandler = async(req,res)=>{
    try {
        
       console.log(userController()) 
    res.status(200).json(userController());

    } catch (error) {
        console.error("error userHandler:", error);
    }
}

    
module.exports ={userHandler}