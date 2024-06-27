import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number
}

const connection: ConnectionObject = {}

// this function will return a promise type

async function dbConnect(): Promise<void> {

  if (connection.isConnected) {
    console.log("Already connected to Database")
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "")
    // the readystate holds a number 1 or 0 meaning conneted or disconnected but here we only need to set it  to a number 
    connection.isConnected = db.connections[0].readyState
    console.log("Db connected successfully")
  } catch (error) {
    console.log("Databade connection failed", error)
    process.exit()

  }
}

export default dbConnect;