const axios= require("axios");
const url = "https://jsonplaceholder.typicode.com/users";


const userHandler = async(req,res)=>{
    try {
    const data = await axios.get(url)
    const infodata=data.data
    console.log(infodata)        
    res.status(200).json(infodata);

    } catch (error) {
        console.error("error userHandler:", error);
    }
}


module.exports ={userHandler}