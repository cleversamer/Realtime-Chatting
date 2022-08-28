const { Router } = require("express");
const router = Router();

const routes = [];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
