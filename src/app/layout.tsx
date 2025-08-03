import "@/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./layoutStyles.module.sass";
import { FEATURE_FLAGS } from "@/global/flags";

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const shouldUsePadding = await FEATURE_FLAGS.usePadding();

  return (
    <html lang="en">
      <body className={`${styles.bodyContainer}`}>
        <div className={`${styles.contentContainer} ${shouldUsePadding ? styles.contentContainerWithPadding : ''}`}>
          <Header />
          <div className={`width-restrict ${styles.layoutContainer}`}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
