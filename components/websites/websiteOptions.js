'use client'

import styles from '@/styles/web-utube-page.module.css'
import Link from 'next/link';
import { useState } from 'react';

const WebsiteOptions = () => {
    const [website, setWebsite] = useState('');

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Choose a website you wish to see
            </div>
            <label htmlFor='websites' className={styles.label}>
                Choose a website:
            </label>
            <div className={styles.wrap}>
                <select
                    name="websites"
                    id="websites"
                    defaultValue={website}
                    onChange={e => setWebsite(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Choose a website</option>
                    <option value="weclick4pdf">weclick4pdf</option>
                    <option value="pyithubawa">pyithubawa</option>
                </select>
                <button className={styles.button}>
                    <Link href={`/websites/${website}`}>go</Link>
                </button>
            </div>
        </div>
    );
}

export default WebsiteOptions;