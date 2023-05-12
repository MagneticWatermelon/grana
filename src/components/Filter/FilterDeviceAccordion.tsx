import { api } from "@/utils/api";
import {
  Accordion,
  Button,
  Flex,
  Select,
  Title,
  createStyles,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { XCircle } from "lucide-react";
import { useState } from "react";

const useStyles = createStyles(() => ({
  filterTitle: {
    padding: "0.5rem 0 0.5rem 1rem",
  },
}));

interface FormValues {
  manufacturer: string;
  model: string;
  api_version: string;
  os_name: string;
}

export function FilterDeviceAccordion({
  form,
}: {
  form: UseFormReturnType<FormValues>;
}) {
  const { classes } = useStyles();
  const [value, setValue] = useState<string[]>([]);

  const manufVals = api.device.getDistinctDeviceInfoValuesPerField.useQuery({
    field: "manufacturer",
  });
  const modelVals = api.device.getDistinctDeviceInfoValuesPerField.useQuery({
    field: "model",
  });
  const apiLevelVals = api.device.getDistinctDeviceInfoValuesPerField.useQuery({
    field: "api_version",
  });
  const osNameVals = api.device.getDistinctDeviceInfoValuesPerField.useQuery({
    field: "os_name",
  });

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
        <Accordion.Item value="manufacturer">
          <Accordion.Control>Manufacturer</Accordion.Control>
          <Accordion.Panel>
            {manufVals.data && (
              <Select
                searchable
                placeholder="Not selected"
                data={manufVals.data}
                {...form.getInputProps("manufacturer")}
              />
            )}
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="model">
          <Accordion.Control>Model</Accordion.Control>
          <Accordion.Panel>
            {modelVals.data && (
              <Select
                searchable
                placeholder="Not selected"
                data={modelVals.data}
                {...form.getInputProps("model")}
              />
            )}
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="api_version">
          <Accordion.Control>API Level</Accordion.Control>
          <Accordion.Panel>
            {apiLevelVals.data && (
              <Select
                searchable
                placeholder="Not selected"
                data={apiLevelVals.data}
                {...form.getInputProps("api_version")}
              />
            )}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="os_name">
          <Accordion.Control>OS Version</Accordion.Control>
          <Accordion.Panel>
            {osNameVals.data && (
              <Select
                searchable
                placeholder="Not selected"
                data={osNameVals.data}
                {...form.getInputProps("os_name")}
              />
            )}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
