import styles from '@/styles/web-utube-page.module.css'
import Latestwebs from '@/components/websites/latestWeb';
import WebsiteOptions from '@/components/websites/websiteOptions';

async function getLatestWebsites() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/websites/firstposts`);
    const data = await res.json();
    return data;
}

export default async function Websites() {
    const webs = await getLatestWebsites();

    return (
        <div className={styles.container}>
            <WebsiteOptions />
            <div className={styles.heading}>
                Latest posts from all websites
            </div>
            <div className={styles.content}>
                {webs && webs.map((web) => {
                    return <Latestwebs web={web} key={web._id} />
                })}
            </div>
        </div>
    );
}




