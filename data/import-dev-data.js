const { error } = require('console');
const fs = require('fs');
const databaseConnect = require('./../config/database')();
const Tour = require("./../models/Tour");

// Read JSON file
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// Import data into DataBase
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data created with success');
    } catch (err) {
        console.error(err.message);
    }
    return process.exit()
}

// Delete all data from DataBase
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data deleted successfully');
    } catch (err) {
        console.error(err.message);
    }
    return process.exit()
}

if (process.argv[2] === '--import') importData()
else if (process.argv[2] === '--delete') deleteData()
