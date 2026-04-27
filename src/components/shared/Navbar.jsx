import Link from 'next/link';
import React from 'react';
import userAvtar from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
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
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;