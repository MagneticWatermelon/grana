import { AppShell, Burger, Header, MediaQuery, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CustomNavbar } from "./NavBar";

type ShellProps = {
  children: React.ReactNode;
};

export function CustomAppShell({ children }: ShellProps) {
  const [opened, handlers] = useDisclosure(false);
  return (
    <AppShell
      layout="alt"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<CustomNavbar hidden={!opened} handler={handlers} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => handlers.toggle()}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <Text>Grana</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
