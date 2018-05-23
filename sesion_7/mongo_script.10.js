print(`Update documents tutorial [${db}]`);

db.users.remove({});

db.users.insertMany([
    {
        _id: "pepe18",
        name: "José",
        last: "Fuentes",
        email: "jose@gmail.com",
        password: "jose123",
    },
    {
        _id: "ana91",
        name: "Ana",
        last: "Sánchez",
        email: "ana@hmail.com",
        password: "ana123"
    },
    {
        _id: "rosa_salvaje",
        name: "Rosa",
        last: "Salvaje",
        email: "lady_apache@hotmail.com",
        password: "salvaje"
    },
    {
        _id: "sexy_girl",
        name: "Devora",
        last: "Hernandez",
        email: "dev@hotmail.com",
        password: "dev123",
    }
]);

let cursor = db.users.find();

while(cursor.hasNext()) {
    let user = cursor.next();
    
    printjson(user);
}