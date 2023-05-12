import { FilterAccordion, FilteredDeviceTable } from "@/components";
import { Center, Flex, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NextPage } from "next";

const useStyles = createStyles((theme) => ({
  main: {
    flexDirection: "row",
    minWidth: "17rem",
    borderColor: `${theme.colors.gray[3]}`,
    borderStyle: "solid",
    borderWidth: "1px 1px 0 1px",
  },
  filters: {
    padding: "0.5rem 0 0.5rem 1rem",
  },
}));
const Insights: NextPage = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      manufacturer: "",
      model: "",
      api_version: "",
      os_name: "",
    },

    transformValues: (values) => {
      return {
        manufacturer: values.manufacturer ? values.manufacturer : undefined,
        model: values.model ? values.model : undefined,
        api_version: values.api_version ? values.api_version : undefined,
        os_name: values.os_name ? values.os_name : undefined,
      };
    },
  });

  return (
    <Flex>
      <form className={classes.main}>
        <FilterAccordion form={form} />
      </form>
      <Center>
        <FilteredDeviceTable values={form.getTransformedValues()} />
      </Center>
    </Flex>
  );
};

export default Insights;
