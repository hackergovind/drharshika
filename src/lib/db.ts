// Database connection utility
// When Prisma and Neon DB are configured, uncomment the following:
//
// import { PrismaClient } from "@prisma/client";
//
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };
//
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === "development" ? ["query"] : [],
//   });
//
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
//
// export default prisma;

// Placeholder export for when database is not yet configured
export const db = null;
