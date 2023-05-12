import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.dark[8],
      lineHeight: theme.lineHeight,
    },

    "svg:not(:root)": {
      overflow: "unset",
    },
  }),
};
