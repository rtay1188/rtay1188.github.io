import Head from "next/head";
import Image from "next/image";
import Chart from "../components/chart"
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Chance: ML Day Trading Simulation</title>
        <meta name="description" content="Chance: ML Day Trading Simulation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>src/pages/index.tsx</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
          <div>
          <Chart/>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://github.com/rtay1188"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            github@rtay1188
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-tay-8578991a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{color: '#0077B5'}}/>
            linkedin@ryantay
          </a>
        </footer>
      </div>
    </>
  );
}