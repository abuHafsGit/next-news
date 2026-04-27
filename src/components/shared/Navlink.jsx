"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navlink = ({ href, children }) => {
    const pathName = usePathname();
    const activePath = href === pathName
    return (
        <Link className={`${activePath ? 'border-b-2 border-purple-500' : ''}`} href={href}>{children}</Link>
    );
};

export default Navlink;