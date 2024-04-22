import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET(req: NextRequest) {
  return Response.json({
    email: "iamkabilash@gmail.com",
    name: "Kabilash",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: "You are logged in.",
  });
}
