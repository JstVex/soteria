import Link from 'next/link';
import styles from '@/styles/donations/donations.module.css'
import { RiArrowGoBackFill } from "react-icons/ri"
import DonationLocation from '@/components/donations/donationLocation';

export async function getDonationForLocation(location) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/donations/${location}`)
    const data = await res.json()
    return data;
}

export default async function Location({ params }) {
    const donations = await getDonationForLocation(params.location);
    console.log(params.location)
    const location = params.location;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>{location}</span>
                <span className={styles.count}>{donations.length} available posts</span>
            </div>
            <Link href='/donations' className={styles.goback}>
                <RiArrowGoBackFill className={styles.gobackicon} />
                <span className={styles.gobacktext}>go back</span>
            </Link>
            <DonationLocation donations={donations} />
        </div>
    )
}