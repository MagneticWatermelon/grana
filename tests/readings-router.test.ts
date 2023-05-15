import { appRouter } from "@/server/api/root";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { RouterInputs } from "@/utils/api";
import { expect, it } from "vitest";

it("should be able to get unique device readings", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getCustomQuery"] = {
    device_id: "demo000000",
    field: "cpu_avg_1min",
    start: new Date("2016-11-15T12:00:00.000Z"),
    end: new Date("2016-11-15T12:30:00.000Z"),
    limit: 10,
  };

  let res = await caller.readings.getCustomQuery(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    value: 24.81,
  });
});

it("should be able to get device 1 Min CPU Average", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["get1MinCpuAverage"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.get1MinCpuAverage(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    cpu_avg_1min: 24.81,
  });
});

it("should be able to get device 5 Min CPU Average", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["get5MinCpuAverage"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.get5MinCpuAverage(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    cpu_avg_5min: 10.802,
  });
});

it("should be able to get device 15 Min CPU Average", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["get15MinCpuAverage"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.get15MinCpuAverage(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    cpu_avg_15min: 8.654,
  });
});

it("should be able to get device used memory", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getMemUsage"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.getMemUsage(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    mem_used: 589988922,
  });
});

it("should be able to get device free memory", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getMemFree"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.getMemFree(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    mem_free: 410011078,
  });
});

it("should be able to get device battery level", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getBatteryLevel"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.getBatteryLevel(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    battery_level: 59,
  });
});

it("should be able to get device battery temperature", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getBatteryTemp"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.getBatteryTemp(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    battery_temperature: 89.5,
  });
});

it("should be able to get device signal strength", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["readings"]["getRSSI"] = {
    device_id: "demo000000",
    limit: 10,
  };

  let res = await caller.readings.getRSSI(input);
  expect(res).toContainEqual({
    time: new Date("2016-11-15T12:00:00.000Z"),
    rssi: -50,
  });
});
