import React from "react";
import Link from 'next/link';
import Btn from './Btn';

export default () => (
    <div>
        <Link href='/' passHref><Btn></Btn></Link>
        <Link href='/contact-us' passHref><Btn></Btn></Link>
    </div>
);