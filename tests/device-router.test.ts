import { appRouter } from "@/server/api/root";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { RouterInputs } from "@/utils/api";
import { expect, it } from "vitest";

it("should be able to get unique manufacturer values", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["device"]["getDistinctDeviceInfoValuesPerField"] = {
    field: "manufacturer",
  };

  let res = await caller.device.getDistinctDeviceInfoValuesPerField(input);
  expect(res).toStrictEqual(["iobeam"]);
});

it("should be able to get query devices based on a full filter", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["device"]["findDevices"] = {
    manufacturer: "iobeam",
    model: "pinto",
    api_version: "23",
    os_name: "6.0.1",
  };

  let res = await caller.device.findDevices(input);
  expect(res).toContainEqual({
    device_id: "demo000000",
    manufacturer: "iobeam",
    model: "pinto",
    api_version: "23",
    os_name: "6.0.1",
  });
});

it("should be able to get query devices based on a partial filter", async () => {
  const ctx = createInnerTRPCContext({ auth: null }, {});
  const caller = appRouter.createCaller(ctx);
  const input: RouterInputs["device"]["findDevices"] = {
    manufacturer: "iobeam",
    model: "pinto",
  };

  let res = await caller.device.findDevices(input);
  expect(res).toContainEqual({
    device_id: "demo000000",
    manufacturer: "iobeam",
    model: "pinto",
    api_version: "23",
    os_name: "6.0.1",
  });
});
