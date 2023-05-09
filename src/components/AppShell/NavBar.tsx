import { UserButton } from "@clerk/nextjs";
import {
  Navbar,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
  rem,
  NavLink,
} from "@mantine/core";
import { Home } from "lucide-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  topSection: {
    paddingTop: theme.spacing.xs,
    paddingBottom: `calc(${theme.spacing.xs} + 1px)`,
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
      width={{ sm: 200, lg: 200 }}
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
        <UserButton
          showName
          userProfileMode="navigation"
          userProfileUrl="/profile"
        />
      </Navbar.Section>

      <Navbar.Section grow className={classes.section}>
        <NavLink
          component={Link}
          label="Home"
          href="/"
          icon={<Home size={18} stroke="1.5" />}
        />
      </Navbar.Section>
    </Navbar>
  );
}
