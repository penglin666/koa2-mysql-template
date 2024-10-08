const Router = require("koa-router");
const controllers = require("../controllers");

const router = new Router();
router.prefix("/api");

router.post("/login", controllers.user.login);

module.exports = router;
