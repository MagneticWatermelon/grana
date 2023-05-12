import { createTRPCRouter } from "@/server/api/trpc";
import { deviceRouter } from "@/server/api/routers/device";
import { readingsRouter } from "./routers/readings";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  device: deviceRouter,
  readings: readingsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
