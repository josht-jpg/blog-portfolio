import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db.collection("articles").find({}).limit(15).toArray();

  res.json(data);
}
