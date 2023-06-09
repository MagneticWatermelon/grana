import { UserProfile } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import { NextPage } from "next";

const GranaUserProfile: NextPage = () => {
  return (
    <Center>
      <UserProfile
        appearance={{
          variables: {
            colorPrimary: "#009119",
          },
          elements: {
            card: { boxShadow: "none" },
            scrollBox: {
              borderRadius: 0,
              borderRight: "1px solid rgba(0, 0, 0, 0.16)",
            },
          },
        }}
      />
    </Center>
  );
};

export default GranaUserProfile;
