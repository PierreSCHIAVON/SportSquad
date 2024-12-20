const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bibliothèque API",
            version: "1.0.0",
            description: "API pour gérer une bibliothèque",
            contact: {
                name: "CleverDev",
                url: "https://cleverdev.fr/",
                email: "contact@cleverdev.fr",
            },
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./routes.js"], // Documentation des routes
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerUi.serve;
module.exports.swaggerSetup = swaggerUi.setup(swaggerDocs);
