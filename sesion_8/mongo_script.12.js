print(`Insert documents tutorial [${db}]`);

db.inventory.remove({});

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "journal", qty: 75, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "paper", qty: 200, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "paper", qty: 10, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
]);

const page = 0;
const page_size = 3;

const cursor = db.inventory.find()
    .sort({ qty: -1 })
    .skip(page * page_size).limit(page_size);

while(cursor.hasNext()) {
    let user = cursor.next();
    
    printjson(user);
}