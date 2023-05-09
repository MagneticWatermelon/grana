import {
  Navbar,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  rem,
  NavLink,
} from "@mantine/core";
import { Building, Home } from "lucide-react";
import Link from "next/link";
import { UserSection } from "./UserSection";

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  topSection: {
    paddingTop: `calc(${theme.spacing.xs} - 2px)`,
    paddingBottom: `calc(${theme.spacing.xs} - 2px)`,
    paddingLeft: theme.spacing.lg,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
  },
  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `${rem(1)} solid ${theme.colors.gray[3]}`,
    },
  },
}));

interface NavBarProps {
  hidden: boolean;
  handler: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
}

export function CustomNavbar({ hidden, handler }: NavBarProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Navbar
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden={hidden}
      width={{ sm: 170, lg: 170 }}
      p="md"
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={!hidden}
          onClick={() => handler.toggle()}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <Navbar.Section className={classes.topSection}>
        <UserSection />
      </Navbar.Section>

      <Navbar.Section grow className={classes.section}>
        <NavLink
          component={Link}
          label="Home"
          href="/"
          icon={<Home color="#009119" size={20} strokeWidth={2} />}
        />
        <NavLink
          component={Link}
          label="Organization"
          href="/organization"
          icon={<Building color="#009119" size={20} strokeWidth={2} />}
        />
      </Navbar.Section>
    </Navbar>
  );
}
