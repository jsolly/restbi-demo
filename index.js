const { RestBIClient } = require('restbi-sdk');
const { dvdrentalModel } = require('./dataModel');
const { sampleQuery } = require('./query');

console.log("Initializing RestBIClient...");

const client = new RestBIClient('http://localhost:3000');

console.log("About to execute query...");

// console.log("Query: ", JSON.stringify(sampleQuery, null, 2));
// console.log("Model: ", JSON.stringify(dvdrentalModel, null, 2));

client.executeQuery(sampleQuery, dvdrentalModel)
    .then(result => {
        console.log('Query result:', result);
    })
    .catch(error => {
        console.error('Error executing query:', error);
    });

console.log("Query execution initiated...");
