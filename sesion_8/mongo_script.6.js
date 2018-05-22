print(`Insert documents tutorial [${db}]`);

db.messages.remove({});

const result = db.messages.insertMany([
    {
        from: "pepe18",
        to:  [
            "ana91",
            "rosa_salvaje",
            "sexy_girl",
            "ana98"
        ],
        body: "Hi, my name is pepe18 and i want to meet you",
        at: new Date()
    },
    {
        from: "ana91",
        to:  [
            "rosa_salvaje",
            "sexy_girl",
            "ana98"
        ],
        body: "Ban to pepe18",
        at: new Date(2018, 5, 22, 11, 30, 0)
    }
]);

print("- Inserted Documents -------");

printjson(result.insertedIds);

print("- Messages --------------------");

let cursor = db.messages.find({}, { _id: false });

function print_message(message) {
    print(`From: ${message.from}\nTo: [ ${message.to.join("; ")} ]`);
    print(`At: ${message.at}`);
    print(`Body: ${message.body}`);
    print("--");
}

while (cursor.hasNext()) {
    const message = cursor.next();

    if (typeof message.at === "string") {
        message.at = ISODate(message.at);
    }

    print_message(message);
}

print("-- [rosa_salvaje] Messages");

const q1 = {
    to: { $all: ["rosa_salvaje"] }
};

const q2 = {
    to: { $elemMatch: { $eq: "rosa_salvaje" } }
};

const q3 = {
    to: { $elemMatch: { $regex: "^rosa", $options: "i" } }
};

cursor = db.messages.find(q3);

while (cursor.hasNext()) {
    const message = cursor.next();

    print_message(message);
}

print(`Total: ${cursor.count()}`);

print("-- Last messages");

const hace_10_min = new Date();

hace_10_min.setMinutes(hace_10_min.getMinutes() - 10);

cursor = db.messages.find({
    at: { $gt: hace_10_min }
});

while (cursor.hasNext()) {
    const message = cursor.next();

    print_message(message);
}

print(`Total: ${cursor.count()}`);