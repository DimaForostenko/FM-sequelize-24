const {Router} = require("express");
const UserController=require("./controllers/user.controller")
const TaskController=require("./controllers/task.controller")
const  router  = Router();

router.get("/users",UserController.getAllUsers);
router.post("/user",UserController.createUser);
router.post("/user/:id/task",TaskController.createTask);

module.exports = router;