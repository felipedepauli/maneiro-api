const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://fpauli:Eko5YTA0QnWnQFnr@cluster0.aecipt3.mongodb.net/?retryWrites=true&w=majority'

console.log('ói eu, aqui')
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("maneiro").collection("positivos");


    const objeto = {
        name: "Cleusa",
        age: 30,
        city: "São Paulo"
    }

    collection.insertOne(objeto, (err, result) => {
        if (err) {
        console.error(err);
        } else {
        console.log(`Objeto inserido com sucesso: ${result.insertedId}`);
        }
    });

    const objetos = [
        { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
        { nome: "Pedro", idade: 40, cidade: "Belo Horizonte" },
        { nome: "Ana", idade: 35, cidade: "Curitiba" }
    ];
    
    collection.insertMany(objetos, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`${result.insertedCount} objetos inseridos com sucesso`);
    }
    });

    client.close();
});

