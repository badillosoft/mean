const main = require("./main");
const router_clientes = require("./route/cliente");
const security_middleware = require("./security/middleware");
const security_router = require("./security/router");

// SEGURIDAD
main.app.use("/auth", security_router);
main.app.use("/api", security_middleware);

// SISTEMA
main.app.use("/api", router_clientes);

const config = require("./config.json");

main.start(config).then(() => { });