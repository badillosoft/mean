const main = require("./main");

const security_middleware = require("./security/middleware");
const security_router = require("./security/router");

const router_clientes = require("./route/cliente");
const router_hamburguesas = require("./route/hamburguesa");

// SEGURIDAD
main.app.use("/auth", security_router);
main.app.use("/api", security_middleware);

// SISTEMA
main.app.use("/api", router_clientes);
main.app.use(router_hamburguesas);

const config = require("./config.json");

main.start(config).then(() => { });