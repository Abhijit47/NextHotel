import mongoose from "mongoose";

const DB = process.env.DATABASE_URL;

async function connect() {
  try {
    const conn = await mongoose.connect(DB);
    console.log("Database connected successfully");
  } catch (err) {
    throw new Error("Database connection failed");
  }
}

export default connect;

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((err) => {
//     console.log("Database connection failed");
//   });
