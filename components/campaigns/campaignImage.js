import styles from "@/styles/campaigns/campaign-main.module.css"
import Image from "next/image";

const CampaignImage = ({ campaign }) => {
    return (
        <Image src={campaign.img} alt="" className={styles.image} width={1000} height={1000} />
    );
}

export default CampaignImage;