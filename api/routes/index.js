const { Router, urlencoded, json } = require("express");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UserRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(json())
    .use(urlencoded({ extended: false }))
    .use(compression());

  apiRoute.use("/user", UserRoutes);
  router.use("/api", apiRoute);

  return router;
};
