import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Healthy server" });
});

app.post("/", async (req, res) => {
  await prisma.person.create({
    data: {
      email: req.body.email,
      password: req.body.password,
      // firstName: req.body.firstName,
    },
  });
  res.json({ message: "Signup successful" });
});

app.listen(5432, function () {
  console.log("Server running");
});

// async function insertUser(
//   email: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: { email, password, firstName, lastName },
//     select: { id: true, password: true },
//   });
//   console.log(res);
// }

// async function updateUser(email: string, firstName: string, lastName: string) {
//   const res = await prisma.user.update({
//     where: {
//       email,
//     },
//     data: {
//       firstName,
//       lastName,
//     },
//     select: { id: true, firstName: true, lastName: true },
//   });
//   console.log(res);
// }

// insertUser("iamkabilash@gmail.com", "123456", "Kabi", "Lash");
// updateUser("iamkabilash@gmail.com", "Kabilash", "S");
