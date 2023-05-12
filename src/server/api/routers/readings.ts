import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const readingsRouter = createTRPCRouter({
  get1MinCpuAverage: protectedProcedure
    .input(
      z.object({
        device_id: z.string(),
        limit: z.number().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.readings.findMany({
        select: {
          time: true,
          cpu_avg_1min: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
});
