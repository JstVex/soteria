import styles from "@/styles/channels/channels.module.css"
import ShowVideos from "./showVideos";

const Videos = ({ vid }) => {
    let i = -1;
    return (
        <div className={styles.content}>
            {vid.views.map(() => {
                i++
                return <ShowVideos vid={vid} key={vid._id} i={i} />
            })}
        </div>
    );
}

export default Videos;