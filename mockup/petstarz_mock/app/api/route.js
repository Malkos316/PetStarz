import { MongoClient } from 'mongodb';


export  async function handler(req, res) {
  try {
    const client = await MongoClient.connect('mongodb+srv://admin:6wItA6SH7CjL4NRv@fosters.enklc0j.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected successfully to MongoDB server");

    const db = client.db('fosters');

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });    

    if (req.method === 'POST') {
      // Insert the new item into the database
      const application = req.body;
      const result = await db.collection('fosters').insertOne(application);
      res.status(200).json({ status: 'success', data: result.ops[0] });
    } else {
      // Fetch data from the database
      const fosters = await db.collection('fosters').find().toArray();
      res.status(200).json({ fosters });
    }

    client.close();
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
}

export async function POST(req, res) {
  try {
    const client = await MongoClient.connect('mongodb+srv://admin:6wItA6SH7CjL4NRv@fosters.enklc0j.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected successfully to MongoDB server");

    const db = client.db('fosters');
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 }); 

    const application = req.body;
    const result = await db.collection('fosters').insertOne(application);
    res.status(200).json({ status: 'success', data: result.ops[0] });
    
    client.close();
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  }
}
