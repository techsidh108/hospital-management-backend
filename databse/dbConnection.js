// import mongoose from "mongoose";

// const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "Hospital_management_system",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };

// module.exports = dbConnection;


const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to MongoDB: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnection;