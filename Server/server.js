// index.js

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const path = require('path');

const app = express();
const port = 3001;

app.use(cors())

// MongoDB Connection URI
const mongoURI = 'mongodb://localhost:27017/AutoHub';

// Connect to MongoDB
MongoClient.connect(mongoURI)
    .then(client => {
        console.log('Connected to MongoDB');

        // Get reference to the 'newarrival' collection
        const db = client.db('AutoHub');

        const newArrivalCollection = db.collection('NewArrival');
        const featuredCollection = db.collection('Featured');
        const bestSellersCollection = db.collection('BestSellers');
        const carsCollection = db.collection('Cars');
        const featuresCollection = db.collection('Features');

        // Define a route handler for GET requests to '/api/newarrival'
        app.get('/newarrival', async (req, res) => {
            try
            {
                const data = await newArrivalCollection.find().toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        app.get('/featured', async (req, res) => {
            try
            {
                const data = await featuredCollection.find().toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        app.get('/bestsellers', async (req, res) => {
            try
            {
                const data = await bestSellersCollection.find().toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        app.get('/cars', async (req, res) => {
            try
            {
                const data = await carsCollection.find().toArray();
                res.json(data);
            }
            
            catch (error)
            {
                console.error('Error fetching data:', error);
                res.status(500).json({ error: 'Failed to fetch data' });
            }
        });

        app.get('/car/:Id', async (req, res) => {
            try
            {
                const name = req.params.Id;

                // Assuming there's a reference to products in your records schema
                const records = await carsCollection.find({ CarName: name }).toArray();
                res.json(records);

            }
            catch (err)
            {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
        });

        app.get('/features/:Id', async (req, res) => {
            try
            {
                const carname = req.params.Id;
                
                const record = await featuresCollection.find({ "Model Name": carname }).toArray();
                res.json(record);
            }
            catch (err)
            {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
        });
        
        // Start the Express server after establishing the MongoDB connection
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB');
        throw err;
    });
