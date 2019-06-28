// Swagger is used to describe our APIs
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDef = require("./swagger.config");
const swaggerSpec = swaggerJSDoc({
  definition: swaggerDef.info,
  apis: swaggerDef.apis
});

const swaggerJson = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
};

module.exports = {
  swaggerSpec,
  swaggerJson
};
