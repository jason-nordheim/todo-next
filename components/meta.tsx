import { APP_NAME } from "config";
import Head from "next/head";

export type Props = {
  title?: string;
  description?: string;
  themeColor?: string;
};

export const Meta = (props: Props) => {
  const { title, description, themeColor } = props;
  return (
    <Head>
      <meta
        name="msapplication-TileColor"
        content={themeColor ? themeColor : "#000"}
      />
      <meta name="theme-color" content={themeColor ? themeColor : "#000"} />
      <meta
        name="description"
        content={description ? description : `A delightful todo app`}
      />
      <title>{title ? title : APP_NAME}</title>
    </Head>
  );
};

export default Meta;
