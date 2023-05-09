import { UserButton, useUser } from "@clerk/nextjs";
import { Center, Group, Loader, Text, createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    color: theme.black,
  },
}));

export function UserSection() {
  const { classes } = useStyles();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <Center>
        <Loader size="sm" color="green" />
      </Center>
    );
  }

  return (
    <div className={classes.user}>
      <Group spacing="xs">
        <UserButton userProfileMode="navigation" userProfileUrl="/profile" />
        <div style={{ flex: 1 }}>
          <div style={{ width: 80 }}>
            <Text
              sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
              size="xs"
              weight={500}
              lineClamp={1}
            >
              {user.fullName}
            </Text>
          </div>
          <div style={{ width: 80 }}>
            <Text
              sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
              color="dimmed"
              size="xs"
            >
              {user.primaryEmailAddress?.emailAddress}
            </Text>
          </div>
        </div>
      </Group>
    </div>
  );
}
