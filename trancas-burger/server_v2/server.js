const main = require("./main");
const router_clientes = require("./route/cliente");

main.app.use("/api", router_clientes);

const config = {
    port: 3000,
    mongo_db: "mean"
};

main.start(config).then(() => {
    // ready
});