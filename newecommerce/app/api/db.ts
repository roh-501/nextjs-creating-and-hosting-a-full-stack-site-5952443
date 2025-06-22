import { Db, MongoClient, ServerApiVersion } from "mongodb";
// rkadu501
// HeQQ0VQBKg28UQF2

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  console.log('process.env.MONGODB_USER', process.env.MONGODB_USER);
  const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cbujh13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  // const uri = `mongodb+srv://rkadu501:HeQQ0VQBKg28UQF2@cluster0.cbujh13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db("newecommerce-nextjs");
  return {
    client,
    db: client.db("newecommerce-nextjs"),
  };
}
