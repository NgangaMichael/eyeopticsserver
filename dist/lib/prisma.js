"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
prisma.$connect()
    .then(() => console.log("✅ Database connected"))
    .catch((err) => {
    console.error("❌ Database connection failed");
    console.error(err);
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map