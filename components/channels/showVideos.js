import styles from "@/styles/channels/channels.module.css"
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs"

const ShowVideos = ({ vid, i }) => {
    return (
        <div className={styles.card}>
            <Image src={vid.imgs[i]} alt="" className={styles.img} width={1000} height={1000} />
            <p className={styles.title}>{vid.titles[i]}</p>
            <div className={styles.extra}>
                <div className={styles.viewNdate}>
                    <span className={styles.view}>{vid.views[i]}</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.date}>{vid.dates[i]}</span>
                </div>
                <a href={vid.urls[i]} target="_blank" rel="noreferrer">
                    <BsFillPlayFill className={styles.play} />
                </a>
            </div>
        </div>
    );
}

export default ShowVideos;