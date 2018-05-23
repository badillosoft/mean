print(`Query documents tutorial [${db}]`);

const cursor = db.inventory.find({});

const alerta = "<-- QUEDAN MENOS DE 50";

while (cursor.hasNext()) {
    const doc = cursor.next();

    print(`ITEM: ${doc.item} (${doc.qty}) ${ doc.qty < 50 ? alerta : "" }`);

    // if (doc.qty < 50) {
    //     print(alerta);
    // }
}