import { type NextPage } from "next";
import { Flex, Slider, Text } from "@mantine/core";
import { useOrganization } from "@clerk/nextjs";

const Home: NextPage = () => {
  const { organization } = useOrganization();

  if (organization) {
    return (
      <Flex justify="center" align="center" direction="column">
        <Text component="p">
          {`Welcome! You are a proud member of ${organization.name}. Head over to the Insights page to explore or read whatever this is.`}
        </Text>
        <Text component="p">
          We are delighted to have you as a member of our esteemed organization
          and extend a warm welcome to you. As a valued member, you now have
          exclusive access to our powerful dashboard application, designed to
          empower you with the ability to explore and analyze the wealth of data
          at your fingertips.
        </Text>
        <Text component="p">
          At our organization, we understand the significance of data-driven
          decision-making and the impact it can have on your productivity,
          efficiency, and overall success. Therefore, we have developed this
          comprehensive dashboard application to cater to your unique needs,
          providing you with an unparalleled platform to delve into the depths
          of our organization's data and extract valuable insights.
        </Text>
        <Text component="p">
          Upon logging in, you will find yourself immersed in a user-friendly
          and visually captivating interface, carefully crafted to facilitate
          your data exploration journey. The moment you enter the application, a
          world of possibilities unfolds before you, allowing you to access a
          wide array of data visualization tools, interactive charts, and
          customizable widgets, all at your fingertips.
        </Text>
        <Text component="p">
          Our organization's dashboard application offers an extensive range of
          features and functionalities, ensuring that you can navigate through
          complex data sets effortlessly. Seamlessly explore trends, patterns,
          and correlations by effortlessly drilling down into different data
          dimensions, filtering information, and setting parameters that align
          with your specific analysis requirements.
        </Text>
        <Text component="p">
          Unleash the power of data by effortlessly creating insightful reports
          and share them with your colleagues, fostering collaboration and
          enabling informed decision-making. Through intuitive and dynamic data
          visualizations, you can effectively communicate complex information to
          stakeholders, empowering them to grasp the essence of your findings.
        </Text>
        <Text component="p">
          Moreover, the application prioritizes data security and privacy,
          ensuring that your sensitive information remains protected at all
          times. With robust authentication protocols and restricted access,
          only members of our organization can benefit from the extensive
          capabilities of this dashboard application, offering you peace of mind
          in an ever-evolving digital landscape.
        </Text>
        <Text component="p">
          As you embark on this data exploration journey, we encourage you to
          take advantage of our comprehensive support resources. Our dedicated
          team of experts is readily available to assist you with any queries or
          challenges you may encounter along the way. We believe in fostering a
          collaborative and nurturing environment, where your success is our
          topmost priority.
        </Text>
        <Text component="p">
          Thank you once again for joining our organization and embracing the
          power of data through our dashboard application. We are confident that
          this tool will revolutionize the way you interact with our data,
          enabling you to make well-informed decisions and drive meaningful
          impact. Together, let us embark on this exciting adventure of
          exploration, discovery, and innovation.
        </Text>
        <Text component="p">
          Welcome aboard, and happy exploring! Also this TOTALLY not AI
          generated. Surely not.
        </Text>
      </Flex>
    );
  }
  return (
    <Flex justify="center" align="center" direction="column">
      <Text>
        Access Denied. You are not a member so you dont get to see anything. If
        you believe you are, try changing you workspace from the left of the
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
