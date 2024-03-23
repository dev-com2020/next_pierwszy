'use client'

import styles from "./page.module.css";
import Link from 'next/link';
import Nav from './components/Nav';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
         <Link href="https://www.alx.pl">Alx</Link>
         <hr/>
         </div>
         <Nav/>
         </div>
    </main>
  );
}
