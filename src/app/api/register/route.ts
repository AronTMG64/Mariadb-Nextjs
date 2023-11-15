import { hashSync, genSaltSync } from 'bcrypt'
import { db } from '@/utils/db';
/*
  const salt = genSaltSync(10)
  const password = '123456'
  const hash = hashSync(password, salt)
*/


export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const salt = genSaltSync(10);
  const hash = hashSync(body.password, salt);
  body.password = hash;

  await db.query(`INSERT INTO users (name,email,password) VALUES ('${body.name}','${body.email}','${body.password}')`);
  return Response.redirect('http://localhost:3000');
};