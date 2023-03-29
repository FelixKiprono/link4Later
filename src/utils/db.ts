import { MongoClient, Db } from "mongodb";

let db: Db;

export async function connectDb(): Promise<void> {
  //mongodb url here for demo
  const client = await MongoClient.connect(``);
  db = client.db();
}

export function getDb(): Db {
  return db;
}
