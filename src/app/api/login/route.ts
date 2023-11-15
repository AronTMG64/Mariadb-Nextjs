import { db } from '@/utils/db';
import { compareSync  } from 'bcrypt';
import { NextResponse } from 'next/server';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export async function POST(req: Request, res: NextResponse) {
  const body = await req.json();
  const users: User[] = await getUsers(body.nameEmail, body.nameEmail) as User[];

  if (users.length !== 0) {
    const match = compareSync(body.password, users[0].password);
    console.log(match);
    return NextResponse.redirect('http://localhost:3000');
  } else {
    return NextResponse.json({msg: 'User not found!'});
  };
};

async function getUsers(email:string, name:string) {
  const data = await db.query(`SELECT * FROM users WHERE email = ? OR name = ?`, [email, name]);
  return Object.values(JSON.parse(JSON.stringify(data)));
};