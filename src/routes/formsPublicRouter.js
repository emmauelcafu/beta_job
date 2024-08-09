const {Router}= require("express");
const { formsPublicHandler } = require("../handler/formsPublicHandler");

const formsPublicRouter=Router();
//:::::::::::::: URL "/formsPublic":::
formsPublicRouter.get("/",formsPublicHandler);


module.exports={formsPublicRouter};