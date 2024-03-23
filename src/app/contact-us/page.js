import styles from "../page.module.css";
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Contact us
                </p>
                <div>
         <Link href="/">Home</Link>
      </div>
            </div>
        </main>
    )
}