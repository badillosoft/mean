const main = require("./main");
const router_clientes = require("./route/cliente");
const security_middleware = require("./security/middleware");
const security_router = require("./security/router");

main.app.use("/auth", security_router);
main.app.use("/api", security_middleware);
main.app.use("/api", router_clientes);

const config = {
    port: 5000,
    mongo_db: "mean"
};

main.start(config).then(() => {
    // ready
});