import React from "react";
import Link from 'next/link';
import Btn from './Btn';

export default () => (
    <div>
        <Link href='/' passHref><Btn>Index</Btn></Link>
        <Link href='/contact-us' passHref><Btn>Kontakt</Btn></Link>
    </div>
);