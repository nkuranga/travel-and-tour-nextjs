import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home2() {
  return (
    <main className={styles.main}>
      <h2>Hello Word {2 + 8}</h2>
    </main>
  );
}
