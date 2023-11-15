import { db } from "@/utils/db";

export async function DELETE(req: Request, res: Response) {
  const body = await req.json();
  db.query("DELETE FROM users WHERE id = ?", [body.id]);
  return Response.redirect('http://localhost:3000/admin');
};
