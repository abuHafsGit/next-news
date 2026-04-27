'use client'
import Link from 'next/link';
import React from 'react';
import userAvtar from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(session)
    return (
        <div className=' container mx-auto flex justify-between items-center '>
            <div></div>
            <ul className=' flex gap-4'>
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/career'}>career </Navlink></li>
            </ul>
            <div className=' flex gap-2 justify-center items-center'>
                <Image src={userAvtar} alt='user avatar' />
                <p>{user?.name}</p>
                <button>
                    <Link href={'/login'}>Login</Link>
                </button>
                <button onClick={async () => await authClient.signOut()}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;