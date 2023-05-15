import { type NextPage } from "next";
import { Flex, Slider, Text } from "@mantine/core";
import { useOrganization } from "@clerk/nextjs";

const Home: NextPage = () => {
  const { organization } = useOrganization();

  if (organization) {
    return (
      <Flex justify="center" align="center" direction="column">
        <Text component="p">
          {`Welcome! You are a proud member of ${organization.name}. Head over to the Insights page to explore. `}
        </Text>
        <Text component="p">
          Sample data readings all have May 15 2016 as day and happen between
          12:00:00 to 20:19:30. You can query outside of this range but it will
          not return anything.
        </Text>
      </Flex>
    );
  }
  return (
    <Flex justify="center" align="center" direction="column">
      <Text>
        Access Denied. You are not a member so you dont get to see anything. If
        you believe you are, try changing your workspace from the left of the
        screen above the navigation bar.
      </Text>
      <Text component="p">
        We regret to inform you that access to our esteemed organization's
        dashboard application is exclusively reserved for authorized members
        only. As you are not a member of our organization, we must inform you
        that you do not have the privilege to explore the valuable data within
        our application.
      </Text>
      <Text component="p">
        Our dashboard application is specifically designed to cater to the
        unique needs of our organization, enabling our members to make informed
        decisions and extract meaningful insights from our vast array of data.
        As a non-member, you are not granted permission to access this powerful
        tool and its extensive range of features.
      </Text>
      <Text component="p">
        We understand that you may be interested in the data and insights
        offered by our organization, but we have strict security and privacy
        protocols in place to safeguard our information. These measures ensure
        that only authorized members can benefit from the data and maintain the
        confidentiality of our organization's operations.
      </Text>
      <Text component="p">
        While we appreciate your curiosity and interest, we must respectfully
        ask you to refrain from attempting to access our dashboard application
        or any associated resources. Unauthorized access to our application is
        strictly prohibited, and any attempts to breach our security measures
        will be dealt with accordingly.
      </Text>
      <Text component="p">
        We encourage you to explore alternative resources and tools that are
        more suitable for your needs. There are numerous publicly available
        platforms and applications that offer data exploration and analysis
        capabilities, catering to a wide range of users and industries.
      </Text>
      <Text component="p">
        Thank you for understanding our policy regarding access to our
        organization's dashboard application. We appreciate your cooperation and
        respect for our organization's data security measures. Should you have
        any questions or require further information, please do not hesitate to
        reach out to us.
      </Text>
      <Text>As a consolation prize, here is a slider that does nothing.</Text>
      <Slider miw={140} label={null} />
    </Flex>
  );
};

export default Home;
