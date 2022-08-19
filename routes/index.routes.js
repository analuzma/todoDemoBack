const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes")
const uploadRoutes = require("./upload.routes")
const productRoutes = require("./product.routes")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.use("/auth",authRoutes);
router.use("/user",userRoutes)
router.use("/upload", uploadRoutes)
router.use("/product", productRoutes)
module.exports = router;