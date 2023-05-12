import {
  Accordion,
  ActionIcon,
  Button,
  Flex,
  Group,
  Select,
  Title,
  createStyles,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { Calendar, Clock, XCircle } from "lucide-react";
import { useRef, useState } from "react";

const useStyles = createStyles(() => ({
  filterTitle: {
    padding: "0.5rem 0 0.5rem 1rem",
  },
}));

interface FormValues {
  startDay: Date;
  endDay: Date;
  startTime: string;
  endTime: string;
  query: string;
}

export function FilterReadingsAccordion({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  const { classes } = useStyles();
  const startRef = useRef<HTMLInputElement>();
  const endRef = useRef<HTMLInputElement>();
  const [value, setValue] = useState<string[]>(["time", "query"]);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Title className={classes.filterTitle} order={4}>
          Filters
        </Title>
        {form.isDirty() && (
          <Button
            leftIcon={<XCircle size={20} />}
            variant="subtle"
            size="xs"
            color="red"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
        )}
      </Flex>
      <Accordion
        multiple
        chevronPosition="left"
        value={value}
        onChange={setValue}
      >
        <Accordion.Item value="time">
          <Accordion.Control>Timeline</Accordion.Control>
          <Accordion.Panel>
            <Group spacing="0.25rem">
              <DatePickerInput
                valueFormat="YYYY MMM DD"
                icon={<Calendar size="1rem" strokeWidth={1.5} />}
                miw={140}
                {...form.getInputProps("startDay")}
              />
              <DatePickerInput
                valueFormat="YYYY MMM DD"
                icon={<Calendar size="1rem" strokeWidth={1.5} />}
                miw={140}
                {...form.getInputProps("endDay")}
              />
            </Group>
            <Group spacing="0.25rem">
              <TimeInput
                //@ts-ignore
                ref={startRef}
                rightSection={
                  //@ts-ignore
                  <ActionIcon onClick={() => startRef.current.showPicker()}>
                    <Clock size="1rem" strokeWidth={1.5} />
                  </ActionIcon>
                }
                {...form.getInputProps("startTime")}
                withSeconds
                miw={140}
              />
              <TimeInput
                //@ts-ignore
                ref={endRef}
                rightSection={
                  //@ts-ignore
                  <ActionIcon onClick={() => endRef.current.showPicker()}>
                    <Clock size="1rem" strokeWidth={1.5} />
                  </ActionIcon>
                }
                {...form.getInputProps("endTime")}
                withSeconds
                miw={140}
              />
            </Group>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="query">
          <Accordion.Control>Query</Accordion.Control>
          <Accordion.Panel>
            <Select
              searchable
              placeholder="Not selected"
              data={[
                { value: "cpu_avg_1min", label: "CPU Average(1 Min)" },
                { value: "cpu_avg_5min", label: "CPU Average(5 Min)" },
                { value: "cpu_avg_15min", label: "CPU Average(15 Min)" },
                { value: "mem_used", label: "Used Memory" },
                { value: "mem_free", label: "Free Memory" },
                { value: "battery_level", label: "Battery Level" },
                { value: "battery_temperature", label: "Battery Temperature" },
                { value: "rssi", label: "Signal Strength" },
              ]}
              {...form.getInputProps("query")}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
