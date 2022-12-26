import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "@next/font/google";

import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
