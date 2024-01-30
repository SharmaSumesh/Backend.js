// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const PORT = 3001;
// app.use(cors());
// app.use(express.json());
// try {
//   mongoose.connect("mongodb+srv://somo:1234@cluster0.xhx5oqc.mongodb.net/test")
//   {
//   console.log("connected");
//   }
// } catch (error) {
//   console.log("not Connected" + error);
// }
// const combinationSchema = new mongoose.Schema({
//   SKU1: { type: String, required: true },
//   SKU2: { type: String, required: true },
//   Frequency: { type: Number, default: 1 },
//   JAN: { type: Number, default: 0 },
//   FEB: { type: Number, default: 0 },
//   MAR: { type: Number, default: 0 },
//   APR: { type: Number, default: 0 },
//   MAY: { type: Number, default: 0 },
//   JUN: { type: Number, default: 0 },
//   JUL: { type: Number, default: 0 },
//   AUG: { type: Number, default: 0 },
//   SEP: { type: Number, default: 0 },
//   OCT: { type: Number, default: 0 },
//   NOV: { type: Number, default: 0 },
//   DEC: { type: Number, default: 0 },
// });
// function Searchpair(array, date) {
//   const combinations = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       combinations.push([array[i], array[j]]);
//     }
//   }
//   return combinations;
// }
// async function processCombination(sku1, sku2, month) {
//   const query = {
//     SKU1: sku1
//     // ,

//     // SKU2: sku2,
//   };

//   const existingItem = await CombinationModel.findOne(query);
//   if (existingItem) {
//     const updateDocument = {
//       $inc: { Frequency: 1 },
//     };
//     updateDocument.$inc[month] = 1;
//     await CombinationModel.updateOne(query, updateDocument);
//   } else {
//     const insertDocument = {
//       SKU1: sku1,
//       SKU2: sku2,
//       Frequency: 1,
//     };
//     insertDocument[month] = 1;
//     await CombinationModel.create(insertDocument);
//   }
// }
// const CombinationModel = mongoose.model("Combination", combinationSchema);
// async function startServer() {
//   let a = Searchpair(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Q","R","G","K"], "DEC"); // Pass the date as the second parameter
//   for (arr of a) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       console.log(arr[i], arr[i + 1]);
//       await processCombination(arr[i], arr[i + 1], "JUN");
//     }
//   }
//   app.listen(PORT, () => {
//     console.log("server is started");
//   });
// }
// // const database = [
// //   { pair: ['a', 'b'], frequency: 5 },
// //   { pair: ['a', 'c'], frequency: 3 },
// //   { pair: ['b', 'c'], frequency: 2 },
// //   {pair:['a','z'],frequency: 2}

// // ];

// // const searchDatabase = (inputElement) => {
// //   const results = [];
// //   for (const entry of database) {
// //     const [element1, element2] = entry.pair;
// //     if (element1 === inputElement || element2 === inputElement) {
// //       const otherElement = element1 === inputElement ? element2 : element1;
// //       results.push({ element: otherElement, frequency: entry.frequency });
// //     }
// //   }

// //   return results;
// // };

// // // Example usage
// // const userInput = 'a';
// // const searchResults = searchDatabase(userInput);

// // console.log(searchResults);

// app.get("/", async (req, res) => {
//   const { query } = req.query;

//   try {
//     const results = await CombinationModel.find({
//       $or: [
//         { SKU1: { $regex: new RegExp(query, "i") } },
//         { SKU2: { $regex: new RegExp(query, "i") } },
//       ],
//     });
//     res.json(results);
//     console.log(results);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// startServer();


// /// testing with String:- 

// // const { MongoClient } = require('mongodb');

// // const uri = 'mongodb+srv://somo:1234@cluster0.xhx5oqc.mongodb.net'; // Update with your MongoDB connection string
// // const dbName = 'test'; // Update with your database name
// // const collectionName = 'combinations'; // Update with your collection name
// // const client = new MongoClient(uri);
// // async function searchPairs(client, inputElement) {
// //   try {
// //     // await client.connect();
// //     // console.log('Connected to the MongoDB server');
// //     // const database = client.db(dbName);
// //     const collection = database.collection(collectionName);
// //     const results = await collection.find({
// //       $or: [
// //         { SKU1: inputElement },
// //         { SKU2: inputElement }
// //       ]
// //     }).toArray();
// //     // console.log(results);
// //     const output = results.map(result => {
// //       const otherElement = result.SKU1 === inputElement ? result.SKU2 : result.SKU1;
// //       return { element: otherElement, frequency: result.Frequency };
// //     });
// //     console.log(output);
// //     return output;
// //   } finally {
// //     console.log('Query completed');
// //   }
// // }

// const userInput = ['2', 'Q'];
// const resultArray = [];

// async function run() {
//   for (let i = 0; i < userInput.length; i++) {
//     const results = await searchPairs(client, userInput[i]);
//     resultArray.push(...results);
//   }
//   const filteredResultArray = resultArray.filter(result => !userInput.includes(result.element));
//   console.log(filteredResultArray);
// }

// run().catch(error => console.error('Error:', error));
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect("mongodb+srv://somo:1234@cluster0.xhx5oqc.mongodb.net/test");
    console.log("Connected to MongoDB");

    const combinationSchema = new mongoose.Schema({
      SKU1: { type: String, required: true },
      SKU2: { type: String, required: true },
      Frequency: { type: Number, default: 1 },
      JAN: { type: Number, default: 0 },
      FEB: { type: Number, default: 0 },
      MAR: { type: Number, default: 0 },
      APR: { type: Number, default: 0 },
      MAY: { type: Number, default: 0 },
      JUN: { type: Number, default: 0 },
      JUL: { type: Number, default: 0 },
      AUG: { type: Number, default: 0 },
      SEP: { type: Number, default: 0 },
      OCT: { type: Number, default: 0 },
      NOV: { type: Number, default: 0 },
      DEC: { type: Number, default: 0 },
    });

    const CombinationModel = mongoose.model("Combination", combinationSchema);

    async function searchPairs(inputElement) {
      try {
        const results = await CombinationModel.find({
          $or: [
            { SKU1: inputElement },
            { SKU2: inputElement }
          ]
        });
        const output = results.map(result => {
          const otherElement = result.SKU1 === inputElement ? result.SKU2 : result.SKU1;
          return { element: otherElement, frequency: result.Frequency };
        });
        console.log(output);
        return output;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    const userInput = ['2', 'Q'];
    const resultArray = [];

    for (let i = 0; i < userInput.length; i++) {
      try {
        const results = await searchPairs(userInput[i]);
        resultArray.push(...results);
      } catch (error) {
        console.error('Error in searchPairs:', error);
      }
    }

    const filteredResultArray = resultArray.filter(result => !userInput.includes(result.element));
    // console.log(filteredResultArray);

    app.listen(PORT, () => {
      console.log("Server is started");
    });
  } catch (error) {
    console.error("Not Connected" + error);
  }
}

startServer();
