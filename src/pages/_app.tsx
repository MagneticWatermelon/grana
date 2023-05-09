import { type AppType } from "next/app";
import { MantineProvider } from "@mantine/core";
import { api } from "~/utils/api";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import { CustomAppShell } from "~/components/AppShell/AppShell";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Grana</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <ClerkProvider {...pageProps}>
          <CustomAppShell>
            <Component {...pageProps} />
          </CustomAppShell>
        </ClerkProvider>
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
