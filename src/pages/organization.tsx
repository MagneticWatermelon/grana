import { OrganizationProfile } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import { NextPage } from "next";

const GranaOrgProfile: NextPage = () => {
  return (
    <Center>
      <OrganizationProfile
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

export default GranaOrgProfile;
