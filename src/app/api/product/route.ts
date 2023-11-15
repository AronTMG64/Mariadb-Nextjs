import { db } from "@/utils/db";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  db.query('INSERT INTO products (name,price,stock,imgUrl) VALUES (?,?,?,?)', [body.name, body.price, body.stock, body.imgUrl]);
  return Response.json({});
};