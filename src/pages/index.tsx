import { type NextPage } from "next";
import { Container, Flex, Text } from "@mantine/core";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Container>
      <Flex justify="center" align="center" direction="column">
        <Text>Hi there!</Text>
        <Text>{hello.data ? hello.data.greeting : "Loading data"}</Text>
      </Flex>
    </Container>
  );
};

export default Home;
