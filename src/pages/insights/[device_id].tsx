import { NextPage } from "next";
import { useRouter } from "next/router";

const DeviceReadings: NextPage = () => {
  const router = useRouter();
  return <p>{router.query.device_id}</p>;
};

export default DeviceReadings;
