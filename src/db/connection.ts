import mongoose from "mongoose"



export async function databaseConntection(){
try {
const DB_CLUSTER=process.env.MONGODB_CLUSTER
const DB_USER=process.env.MONGODB_USER
const DB_PASSWORD=process.env.MONGODB_PASSWORD
const DB_NAME=process.env.MONGODB_DATABASE

console.log(DB_CLUSTER)
console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_NAME)

const url=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}`

console.log(url)
const conntectionInstance=await mongoose.connect(url);
console.log("MONGO DB CONNTECTED")
} catch (error) {
  console.log(error)
  // throw new Error("Unable to Connect to database")
  process.exit(1)
}
}