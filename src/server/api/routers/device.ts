import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const deviceRouter = createTRPCRouter({
  findDevices: protectedProcedure
    .input(
      z.object({
        model: z.string().optional(),
        manufacturer: z.string().optional(),
        api_version: z.string().optional(),
        os_name: z.string().optional(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.device_info.findMany({
        where: {
          model: {
            equals: input.model,
          },
          manufacturer: {
            equals: input.manufacturer,
          },
          api_version: {
            equals: input.api_version,
          },
          os_name: {
            equals: input.os_name,
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
