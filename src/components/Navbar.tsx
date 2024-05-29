import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='header'>
            <nav className='navbar'>

                <Link href='/'>Remote Kitchen</Link>

            </nav>
        </header>
    )
}

export default Navbar;