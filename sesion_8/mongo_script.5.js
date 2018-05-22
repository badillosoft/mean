print(`Query documents tutorial [${db}]`);

// Inventory
//   item : string
//   qty : number
//   size : { h : number, w : number, uom : string }
//   status : string

const query = {
    "size.w": { $gte: 20 } // path: size.w
};

const cursor = db.inventory.find(query);

while (cursor.hasNext()) {
    const doc = cursor.next();

    print(`ITEM: ${doc.item} (${doc.qty}) [${doc.size.h}x${doc.size.w}]`);
}