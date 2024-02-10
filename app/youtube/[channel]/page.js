import Videos from "@/components/channels/videos";
import styles from "@/styles/channels/channel.module.css";
import Image from "next/image";

export async function getChannel(channel) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/channels/${channel}`)
    const data = await res.json();
    return data;
}

export default async function Channel({ params }) {
    const vids = await getChannel(params.channel);

    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <Image src={vids[0].pfp} alt="" className={styles.pfp} width={1000} height={1000} />
                <div className={styles.wrap}>
                    <span className={styles.channel}>{vids[0].channel.toUpperCase()}</span>
                    <span className={styles.subs}>{vids[0].subs}</span>
                </div>
            </div>
            <div className={styles.heading}>
                Videos
            </div>
            {vids && vids.map((vid) => {
                return <Videos vid={vid} key={vid._id} />
            })}
        </div >
    );
}