import React from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Btn() {
    const router = useRouter()
    return (
    
        <div>
            <Link href='/contact-us' passHref>Kontakt</Link>
            <button onClick={() => router.push('/contact-us')}>Kontakt2</button> 
            </div>
    );
}


