const { Router, urlencoded, json } = require("express");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ StudentRoutes, TeacherRoutes, CourseRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(json())
    .use(urlencoded({ extended: false }))
    .use(compression());

  apiRoute.use("/student", StudentRoutes);
  apiRoute.use("/teacher", TeacherRoutes);
  apiRoute.use("/course", CourseRoutes);
  router.use("/api", apiRoute); 

  return router;
};
