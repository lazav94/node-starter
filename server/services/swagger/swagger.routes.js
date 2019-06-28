const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");

const { swaggerJson, swaggerSpec } = require("./swagger.controller");

router
  .get("/json", swaggerJson)
  .use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
