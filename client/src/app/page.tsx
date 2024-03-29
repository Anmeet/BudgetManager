import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{" "}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              src="/vercel.svg"
              width={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          alt="Next.js Logo"
          className={styles.logo}
          height={37}
          src="/next.svg"
          width={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          className={styles.card}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          className={styles.card}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>
      </div>
    </main>
  );
}
