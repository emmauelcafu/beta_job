const {Router}= require("express");
const {userRouter}= require("./userRouter")
const {formsPostRouter}= require("./formsPostRouter")

const router = Router();
router.use("/", userRouter)
router.use("/formsPost", formsPostRouter)


module.exports = router;