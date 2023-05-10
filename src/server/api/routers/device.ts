import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const deviceRouter = createTRPCRouter({
  getPintoDevices: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.device_info.findMany({
      take: 10,
      where: {
        model: {
          equals: "pinto",
        },
      },
    });
  }),
  getDistinctDeviceInfoValuesPerField: protectedProcedure
    .input(
      z.object({
        field: z.enum(["model", "manufacturer", "api_version", "os_name"]),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.device_info.findMany({
        where: {},
        distinct: [input.field],
      });
      return res.map((device) => device[input.field]);
    }),
});
