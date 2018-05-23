print(`Insert documents tutorial [${db}]`);

db.users.remove({});

db.users.insertMany([
    {
        _id: "pepe18",
        name: "José",
        last: "Fuentes",
        email: "jose@gmail.com",
        password: "jose123"
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
        password: "dev123"
    }
]);

db.messages.remove({});

db.messages.insertMany([
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
            "sexy_girl"
        ],
        body: "Ban to pepe18",
        at: new Date(2018, 5, 22, 11, 30, 0)
    }
]);

print("-- Messages")

let m_cursor = db.messages.find();

while(m_cursor.hasNext()) {
    let message = m_cursor.next();

    let user = db.users.findOne({ _id: message.from });

    if (user) {
        print(`FROM: ${message.from} (${user.email})`);
    } else {
        print(`ERROR: No se encuentra el usuario [${message.from}]`);
    }
}