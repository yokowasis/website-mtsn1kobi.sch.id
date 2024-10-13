import Head from "next/head";
import { Settings, settings } from "../settings";

const Header = (props: { s: Settings }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>EduGrids - Education & Online Course HTML Template.</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { s: settings },
  };
};

export default Header;
