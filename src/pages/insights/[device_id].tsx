import { DateTime } from "luxon";
import { NextPage } from "next";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { Flex, createStyles } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import { FilterReadingsAccordion, ReadingsChart } from "@/components";
import { useForm } from "@mantine/form";
import { calcMillis } from "@/utils/date";

const useStyles = createStyles((theme) => ({
  main: {
    height: "100%",
  },
  form: {
    flexDirection: "row",
    minWidth: "20rem",
    border: `1px solid ${theme.colors.gray[3]}`,
  },
  chart: {
    flex: "1 1 100%",
    flexDirection: "column",
    height: 500,
    overflow: "hidden",
    minWidth: 0,
  },
}));

const DeviceReadings: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const [_scrollOck] = useScrollLock(true);

  const form = useForm({
    initialValues: {
      startDay: new Date("2016-11-15"),
      endDay: new Date("2016-11-15"),
      startTime: "12:00:00",
      endTime: "12:30:00",
      query: "cpu_avg_1min",
    },

    transformValues: (values) => {
      const startDay = DateTime.fromISO(form.values.startDay.toISOString());
      const startTime = DateTime.fromISO(form.values.startTime);
      const timeS = calcMillis(
        startTime.hour,
        startTime.minute,
        startTime.second
      );

      const endDay = DateTime.fromISO(form.values.endDay.toISOString());
      const endTime = DateTime.fromISO(form.values.endTime);
      const timeE = calcMillis(endTime.hour, endTime.minute, endTime.second);

      return {
        startDay: startDay.plus(timeS).toJSDate(),
        endDay: endDay.plus(timeE).toJSDate(),
        startTime: values.startTime,
        endTime: values.endTime,
        query: values.query,
      };
    },
  });

  const custom = api.readings.getCustomQuery.useQuery({
    device_id: router.query.device_id as string,
    start: form.getTransformedValues().startDay,
    end: form.getTransformedValues().endDay,
    field: form.getTransformedValues().query,
  });

  return (
    <Flex className={classes.main}>
      <form className={classes.form}>
        <FilterReadingsAccordion form={form} />
      </form>
      <Flex className={classes.chart}>
        <ReadingsChart
          query={form.values.query}
          isLoading={custom.isLoading}
          data={custom.data}
        />
      </Flex>
    </Flex>
  );
};

export default DeviceReadings;
