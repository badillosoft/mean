function uuid() {
    return Math.random().toString(16).slice(2);
}

function randomUser() {
    const user = {
        name: uuid(),
        email: `${uuid()}@${uuid()}.com`,
        age: Math.floor(Math.random() * 100),
        money: Math.floor(Math.random() * 100000) / 10
    };
    return user;
}

db.users.remove({});

for (let i = 0; i < 10; i++) {
    let user = randomUser();
    db.users.insertOne(user);
}

const cursor = db.users.find({ age: { $gte: MIN_AGE } });

while(cursor.hasNext()) {
    let user = cursor.next();
    
    printjson(user);
}

const mayores = db.users.find({ age: { $gte: MIN_AGE } }).count();

print(`Mayores a ${MIN_AGE} años: ${mayores}`);