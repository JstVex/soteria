import styles from '@/styles/web-utube-page.module.css'
import LatestUpload from '@/components/channels/latestUpload';
import ChannelOptions from '@/components/channels/channelOptions';

async function getChannels() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/channels`);
    const data = await res.json();
    return data;
}

export async function Youtube() {
    const channels = await getChannels();

    return (
        <div className={styles.container}>
            <ChannelOptions />
            <div className={styles.heading}>
                Latest videos from all channels
            </div>
            <div className={styles.content}>
                {channels && channels.map((channel) => {
                    return <LatestUpload channel={channel} key={channel._id} />
                })}
            </div>
        </div>
    );
}



export default Youtube;