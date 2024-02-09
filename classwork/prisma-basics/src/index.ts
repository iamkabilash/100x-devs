import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: { email, password, firstName, lastName },
    select: { id: true, password: true },
  });
  console.log(res);
}

async function updateUser(email: string, firstName: string, lastName: string) {
  const res = await prisma.user.update({
    where: {
      email,
    },
    data: {
      firstName,
      lastName,
    },
    select: { id: true, firstName: true, lastName: true },
  });
  console.log(res);
}

// insertUser("iamkabilash@gmail.com", "123456", "Kabi", "Lash");
updateUser("iamkabilash@gmail.com", "Kabilash", "S");
