"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ status: "Healthy server" });
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.person.create({
        data: {
            email: req.body.email,
            password: req.body.password,
            // firstName: req.body.firstName,
        },
    });
    res.json({ message: "Signup successful" });
}));
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
