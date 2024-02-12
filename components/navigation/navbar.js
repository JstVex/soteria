'use client'

import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClose = () => {
        setTimeout(() => {
            setMobileMenuOpen(false);
        }, 300);
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        };

        handleBodyOverflow();
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className={styles.container}>
            <p className={styles.title}>
                <Link href="/">Soteria</Link>
            </p>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <Link href="/websites">websites</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/youtube">youtube</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/donations">donations</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/campaigns">campaigns</Link>
                </li>
            </ul>
            <FiMenu className={styles.icon} onClick={handleMenuClick} />
            <div className={`${styles.mobile_container} ${isMobileMenuOpen ? styles.mobile_on : styles.mobile_off}`}>
                <div className={styles.mobile_wrapper}>
                    <MdOutlineClose className={styles.mobile_close} onClick={handleMenuClick} />
                    <ul className={styles.mobile_links}>
                        <li className={styles.mobile_link} onClick={handleMenuClose}>
                            <Link href="/websites">websites</Link>
                        </li>
                        <li className={styles.mobile_link} onClick={handleMenuClose}>
                            <Link href="/youtube">youtube</Link>
                        </li>
                        <li className={styles.mobile_link} onClick={handleMenuClose}>
                            <Link href="/donations">donations</Link>
                        </li>
                        <li className={styles.mobile_link} onClick={handleMenuClose}>
                            <Link href="/campaigns">campaigns</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
