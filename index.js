import express from 'express'


const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



import {MongoClient} from 'mongodb'
const uri = 'mongodb+srv://fpauli:Eko5YTA0QnWnQFnr@cluster0.aecipt3.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    const database = client.db("maneiro");
    const positivos = database.collection("positivos");

        // create an array of documents to insert

        const docs = [

            { name: "cake", healthy: false },
      
            { name: "lettuce", healthy: true },
      
            { name: "donut", healthy: false }
      
          ];
      
          // this option prevents additional documents from being inserted if one fails
      
          const options = { ordered: true };
      
          const result = await positivos.insertMany(docs, options);
      
          console.log(`${result.insertedCount} documents were inserted`);
      
        } finally {
      
          await client.close();
      
        }
      
      }
      
      run().catch(console.dir);
