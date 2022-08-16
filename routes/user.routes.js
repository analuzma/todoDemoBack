const router = require("express").Router();
const { del } = require("express/lib/application");
//importar el controlador 
const {getLoggedUser,editProfile, getUserById, onlyAdminRead, deleteAccount} = require("../controllers/user.controller")
//vamos a importar los middleware 
const { verifyToken, checkRole } = require("../middleware")

//Read - perfil
router.get("/my-profile",verifyToken,getLoggedUser);
//UPDate - Perfil
router.patch("/edit-profile",verifyToken,editProfile);
//Delete - user "user must be logged in"
router.delete("/delete-user", verifyToken,  deleteAccount);

//Read - otro usuario
router.get("/:id/profile", verifyToken, getUserById)

//Read - all users (for Admin role.. this should be in another file)
router.get("/admin/users", verifyToken, )

//Read - [ADMIN] ALL user list
router.get("/admin/users", verifyToken, checkRole( ["Admin"] ), onlyAdminRead)

module.exports = router;