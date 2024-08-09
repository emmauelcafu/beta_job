const {Router}= require("express");
const {userRouter}= require("./userRouter")
const {formsPublicRouter}= require("./formsPublicRouter")

const router = Router();
router.use("/", userRouter)
router.use("/formsPublic", formsPublicRouter)


module.exports = router;