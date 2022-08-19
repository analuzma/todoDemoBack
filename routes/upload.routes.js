const router=require("express").Router();
//importar el controlador
const { uploadProcess, deleteImage } = require("../controllers/upload.controller")
//middlewares
const uploadCloud=require("../helpers/cloudinary")
const { verifyToken } = require("../middleware")

//multiples  //files
router.post("/uploads", verifyToken, uploadCloud.array("images", 3), uploadProcess)
//una sola  /file
router.post("/single", verifyToken, uploadCloud.single("image"), uploadProcess)
//delete file
router.delete("/delete-image/:name", verifyToken, deleteImage)

module.exports=router