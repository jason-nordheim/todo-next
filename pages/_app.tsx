import { AppProps } from "next/app";
import "materialize-css/dist/css/materialize.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
