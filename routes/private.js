const Router = require("koa-router");
const controllers = require("../controllers");

const jwtMiddleware = require("../middlewares/jwt");

const router = new Router();
router.prefix("/api");
router.use(jwtMiddleware);

router.get("/userInfo", controllers.user.getUserInfo);

module.exports = router;
