import { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import "../styles/tailwind.css";

const client = createClient({
  url: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}`,
  fetchOptions: () => ({
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
    },
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
