import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const deviceRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),
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
});
