import styles from "@/styles/card.module.css"
import Image from "next/image";

const Donation = ({ donation, setSelectedTitle, setSelectedImg, setSelectedStartDate, setSelectedEndDate, setSelectedText, setSelectedName, setSelectedTarget, setSelectedUrl, setSelectedPayment }) => {
    const handleSelectedPost = () => {
        setSelectedTitle(donation.title);
        setSelectedImg(donation.img);
        setSelectedStartDate(donation.startDate);
        setSelectedEndDate(donation.endDate);
        setSelectedText(donation.text);
        setSelectedName(donation.name);
        setSelectedTarget(donation.target);
        setSelectedUrl(donation.url);
        setSelectedPayment(donation.payment)
    }

    return (
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{donation.title}</p>
            <Image src={donation.img} alt="" className={styles.img} width={1000} height={1000} />
            <p className={styles.text}>
                {donation.text.length > 100
                    ? donation.text.slice(0, 100) + '...'
                    : donation.text
                }
            </p>
            <div className={styles.extra}>
                <p className={styles.name}>{donation.name}</p>
                <p className={styles.date}>{donation.startDate}</p>
            </div>
        </div>
    );
}

export default Donation;