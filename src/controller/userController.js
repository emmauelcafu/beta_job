const axios  = require("axios");
const url = "https://jsonplaceholder.typicode.com/users";

const userController = async()=>{
    try {
        const dataUrl = await axios.get(url)
        const datainfo= dataUrl.data
        return datainfo;
    } catch (error) {
            console.log("error of usercontroller:", error)
    }

}

module.exports= {
    userController
};