import { FilterAccordion } from "@/components/Filter/FilterAccordion";
import { Center, Flex, List, createStyles } from "@mantine/core";
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
  });

  return (
    <Flex>
      <form
        className={classes.main}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <FilterAccordion form={form} />
      </form>
      <Center>
        <List>
          <List.Item>{form.values.manufacturer}</List.Item>
          <List.Item>{form.values.model}</List.Item>
          <List.Item>{form.values.api_version}</List.Item>
          <List.Item>{form.values.os_name}</List.Item>
        </List>
      </Center>
    </Flex>
  );
};

export default Insights;
