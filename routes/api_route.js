const router = require("express").Router();
var parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: false });

const controller = require("../controllers/api.controller");

//REGISTER ROUTE
router.post("/updateform",encodeUrl, controller.user_register);
router.post("/fetchalluser", controller.fetchalluser	);
router.get("/fetchuserbyemail", controller.fetchuserbyemail);


module.exports = router;
