// edad: { $lte: 29 } edad <= 29
// edad: { $lt: 30 } edad < 30
// edad: { $gte: 29 } edad >= 29
// edad: { $gt: 30 } edad > 30
// edad: { $eq: 30 } edad == 30
// edad: { $neq: 30 } edad != 30
// edad: { $gte: 20, $lte: 30 } edad >= 20 && edad <= 30

const cur = db.clientes.find({
    edad: { $lt: 29 } //less-than
});

print("Clientes menores a 30 años:");

while(cur.hasNext()) {
    const cliente = cur.next();
    printjson(cliente);
}