print(`Query documents tutorial [${db}]`);

// Inventory
//   item : string
//   qty : number
//   size : { h : number, w : number, uom : string }
//   status : string

// Visita: https://docs.mongodb.com/manual/reference/operator/

// Operadores de comparación
//   $lt - less-than (a < b) { a: { $lt: b } }
//   $lte - less-than-equal ( a <= b ) { a: { $lte: b } }
//   $gt - greater-than
//   $gte - greater-than-equal
//   $eq - equals-to ( a === b ) { a: b } { a: { $eq: b } }
//   $neq - not-equals-to ( a !== b ) { a: { $neq: b } }

// Operadores lógicos
//   $and - && ( c1 && c2 ) { c1, c2 } { $and: [ { c1 }, { c2 } ] }
//   $or - || ( c1 || c2 ) { $or: [ { c1 }, { c2 } ] }

const query = {
    qty: { $lt: 50 },
    status: "A"
};

const query_and = {
    $and: [
        {
            qty: { $lt: 50 }
        },
        {
            status: "A"
        }
    ]
},

const query_or = {
    $or: [
        {
            qty: { $lt: 50 }
        },
        {
            status: "A"
        }
    ]
}

const cursor = db.inventory.find(query);

while (cursor.hasNext()) {
    const doc = cursor.next();

    print(`ITEM: ${doc.item} (${doc.qty})`);
}