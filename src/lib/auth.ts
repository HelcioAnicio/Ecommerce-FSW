import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import { PrismaClient, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
function PrismaAdapter(
  prismaClient: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
): import("next-auth/adapters").Adapter | undefined {
  throw new Error("Function not implemented.");
}
