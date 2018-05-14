const cur = db.clientes.find({});

print("clientes:");

while(cur.hasNext()) {
    const cliente = cur.next();
    printjson(cliente);
}