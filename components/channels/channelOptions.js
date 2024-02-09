'use client'

import Link from "next/link";
import styles from '@/styles/web-utube-page.module.css'
import { useState } from "react";

const ChannelOptions = () => {
    const [channel, setChannel] = useState('');

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Choose a channel you wish to see
            </div>
            <label htmlFor='channels' className={styles.label}>
                Choose a youtube channel:
            </label>
            <div className={styles.wrap}>
                <select
                    name="channels"
                    id="channels"
                    defaultValue={channel}
                    onChange={e => setChannel(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Choose a channel</option>
                    <option value="WeClick">weclick</option>
                    <option value="WeClick4MM">weclick4mm</option>
                    <option value="RaungNi">raungni</option>
                    <option value="PaDayTharPin">padaytharpin</option>
                </select>
                <button className={styles.button}>
                    <Link href={`/youtube/${channel.toLowerCase()}`}>go</Link>
                </button>
            </div>
        </div>
    );
}

export default ChannelOptions;