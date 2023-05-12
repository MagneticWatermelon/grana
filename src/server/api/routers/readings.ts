import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const readingsRouter = createTRPCRouter({
  getCustomQuery: protectedProcedure
    .input(
      z.object({
        device_id: z.string(),
        field: z.string(),
        start: z.date(),
        end: z.date(),
        limit: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.readings.findMany({
        select: {
          time: true,
          [input.field]: true,
        },
        where: {
          device_id: input.device_id,
          time: {
            gte: input.start,
            lt: input.end,
          },
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : undefined,
      });

      // Format bytes into Megabytes
      if (input.field === "mem_used" || input.field === "mem_free") {
        return res.map((r) => {
          return {
            //@ts-ignore
            value: (r[input.field] / (1024 * 1024)).toFixed(2),
            time: r["time"],
          };
        });
      }

      return res.map((r) => {
        return {
          value: r[input.field],
          time: r["time"],
        };
      });
    }),
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
  get5MinCpuAverage: protectedProcedure
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
          cpu_avg_5min: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  get15MinCpuAverage: protectedProcedure
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
          cpu_avg_15min: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  getMemUsage: protectedProcedure
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
          mem_used: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  getMemFree: protectedProcedure
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
          mem_free: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  getBatteryLevel: protectedProcedure
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
          battery_level: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  getBatteryTemp: protectedProcedure
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
          battery_temperature: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
  getRSSI: protectedProcedure
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
          rssi: true,
        },
        where: {
          device_id: input.device_id,
        },
        orderBy: { time: "asc" },
        take: input.limit ? input.limit : 50,
      });
    }),
});
