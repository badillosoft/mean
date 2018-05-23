print(`Query documents tutorial [${db}]`);

// Podemos especificar un objeto de proyección como segundo parámetro
// para mostrar u olcutar ciertos campos
const cursor = db.inventory.find({}, { _id: false, item: true, qty: true });

while (cursor.hasNext()) {
    const doc = cursor.next();

    printjson(doc);
}