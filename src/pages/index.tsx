import { type NextPage } from "next";
import { Flex, Text } from "@mantine/core";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const pintoDevices = api.device.getPintoDevices.useQuery();

  return (
    <Flex justify="center" align="center" direction="column">
      <Text>Hi there!</Text>
      {pintoDevices.data &&
        pintoDevices.data.map((device) => {
          return <Text key={device.device_id}>{device.api_version}</Text>;
        })}
    </Flex>
  );
};

export default Home;
