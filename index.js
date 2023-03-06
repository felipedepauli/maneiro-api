import express, { query } from 'express'
import objetos from './conf/db/positives.json' assert { type: "json" }
import {MongoClient} from 'mongodb'

const app = express()
const port = 3001

const sendJson = (res) => (json) => res.json(json)

app.get('/write', async (req, res) => {
	const docs = await write()
	res.json(docs)
})

app.get('/read', async (req, res) => {
	const docs = await read()
	res.json(docs)
})
app.get('/query', (req, res) => {
	run();
})

async function read() {
	const uri = 'mongodb+srv://fpauli:Eko5YTA0QnWnQFnr@cluster0.aecipt3.mongodb.net/?retryWrites=true&w=majority'
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	await client.connect()
	const database = client.db('maneiro')
	const positivos = database.collection('positivos')
	const docs = await positivos.find({}).toArray()
	await client.close()
	return docs
}
async function write() {
	const uri = 'mongodb+srv://fpauli:Eko5YTA0QnWnQFnr@cluster0.aecipt3.mongodb.net/?retryWrites=true&w=majority'
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	await client.connect()
	const database = client.db('maneiro')
	const positivos = database.collection('positivos')
	const docs = await positivos.find({}).toArray()
	await client.close()
	return docs
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})