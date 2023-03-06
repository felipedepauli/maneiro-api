const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://fpauli:Eko5YTA0QnWnQFnr@cluster0.aecipt3.mongodb.net/?retryWrites=true&w=majority'

const data = require('./data.json');

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
        ...data
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

