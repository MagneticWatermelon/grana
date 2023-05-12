import { FilterAccordion, FilteredDeviceTable } from "@/components";
import { Flex, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { NextPage } from "next";

const useStyles = createStyles((theme) => ({
  main: {
    height: "100%",
  },
  form: {
    flexDirection: "row",
    minWidth: "17rem",
    borderColor: `${theme.colors.gray[3]}`,
    borderStyle: "solid",
    borderWidth: "1px 0 1px 1px",
  },
  table: {
    width: "100%",
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
    <Flex className={classes.main}>
      <form className={classes.form}>
        <FilterAccordion form={form} />
      </form>
      <div className={classes.table}>
        <FilteredDeviceTable values={form.getTransformedValues()} />
      </div>
    </Flex>
  );
};

export default Insights;
