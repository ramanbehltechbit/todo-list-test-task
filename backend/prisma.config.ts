import { defineConfig } from "@prisma/config";
import { env } from "process";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  // Only URL allowed here (NO provider!)
  datasource: {
    url: env.DATABASE_URL!,
  },
});
