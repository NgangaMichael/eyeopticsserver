"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from "@prisma/client";
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
prisma.$connect()
    .then(() => console.log("✅ Database connected"))
    .catch((err) => {
    console.error("❌ Database connection failed");
    console.error(err);
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map