'use client';

import "@/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./layoutStyles.module.sass";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${styles.bodyFont} ${styles.bodyContainer}`}>
        <div className={`${styles.contentContainer}`}>
          <Header />
          <div className={styles.layoutContainer}>
            <div className={styles.layoutContent}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
