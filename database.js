```javascript
// database.js

const { MongoClient } = require('mongodb');

// Connect to the MongoDB database
async function connectToDatabase() {
  const uri = 'mongodb://localhost:27017/mydatabase';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
```