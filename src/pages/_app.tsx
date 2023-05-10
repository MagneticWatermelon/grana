import { type AppType } from "next/app";
import { MantineProvider } from "@mantine/core";
import { api } from "@/utils/api";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import { CustomAppShell } from "@/components";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Grana</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
