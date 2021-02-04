import Layout from "components/layout";
import { APP_NAME } from "config";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to {APP_NAME}</h1>
    </Layout>
  );
}
