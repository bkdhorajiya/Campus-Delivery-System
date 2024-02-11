const express = require("express");
const router = express.Router();


const {userSignup, userLogin ,getShopList } = require("../Controllers/Auth");
const {vendorSignup, vendorLogin} = require("../Controllers/vendorAuth");
const {userGetShopCProducts, validateTokenUser, razorpayPayment, searchProduct} = require("../Controllers/user");
const {cartAddProduct, updateProductCountInCart} = require("../Controllers/Cart");
const {userGetShopCProducts, validateTokenUser, razorpayPayment} = require("../Controllers/user");
const {vendorCategory, vendorGetCategory, vendorAddProduct, vendorDeleteItem, vendorUpdateCategoryName,vendorUpdateProductDetail,validateTokenVendor} = require("../Controllers/vendor");


const upload = require("../middlewares/multer");

router.post("/login",userLogin);
router.post("/signup", userSignup);
router.post("/shop", userGetShopCProducts);
router.get("/validateTokenUser", validateTokenUser);
router.post("/razorpayPayment", razorpayPayment);

router.get("/allProductperCategoryShop",vendorGetCategory);
//router.post("/ChangePassword", userchangePassword); 
router.post("/getShopList", getShopList);  
router.post("/addProductCart",cartAddProduct); 
router.post("/updateProductCountInCart",updateProductCountInCart); 
// router.post("/getProductList", userchangePassword); 
router.post("/searchProduct", searchProduct); 
// router.post("/addToCart", userchangePassword);
// router.post("/payment", userchangePassword);
// router.post("/orderHistory", userchangePassword);
// router.post("/cancleOrder", userchangePassword);

router.post("/vendor/login",vendorLogin);
router.post("/vendor/signup",upload.single("image"), vendorSignup);
router.post("/vendor/addcategoryproduct",vendorCategory);
router.post("/vendor/add-product",upload.single("image"),vendorAddProduct);  //given the category name
router.delete("/vendor/delete-item",vendorDeleteItem);
router.post("/vendor/update-category-name",vendorUpdateCategoryName);
router.post("/vendor/update-product-details",upload.single("image"), vendorUpdateProductDetail);
router.get("/vendor/validateTokenVendor",validateTokenVendor);
// router.post("/vendor/addProduct",vendorLogin);
// router.post("/vendor/getOrderHistory",vendorLogin);
// router.post("/vendor/updateProduct",vendorLogin);
// router.post("/vendor/acceptOrder",vendorLogin);
// router.post("/vendor/updateOrderStatus",vendorLogin);





module.exports = router;
