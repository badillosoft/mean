print(`Query documents tutorial [${db}]`);

const cursor = db.inventory.find({});

while (cursor.hasNext()) {
    const doc = cursor.next();

    printjson(doc);
}