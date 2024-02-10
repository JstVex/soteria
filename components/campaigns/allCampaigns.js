'use client'

import styles from "@/styles/campaigns/campaign-main.module.css"
import { useState } from "react";
import CampaignModal from "./campaignModal";
import Campaign from "./campaign";

const AllCampaigns = ({ campaigns }) => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedPrize, setSelectedPrize] = useState(null);
    const [selectedForwhom, setSelectedForwhom] = useState(null);

    return (
        <>
            <div className={styles.second_section}>
                <div className={styles.heading}>
                    <span className={styles.heading_content}>
                        Campaigns
                    </span>
                </div>
                <div className={styles.content}>
                    {campaigns && campaigns.map((campaign) => {
                        return <Campaign campaign={campaign} key={campaign._id} setSelectedTitle={setSelectedTitle}
                            setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedPayment={setSelectedPayment} setSelectedPrize={setSelectedPrize} setSelectedForwhom={setSelectedForwhom} />
                    })}
                </div>
            </div>
            {selectedTitle && <CampaignModal setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedPayment={selectedPayment} selectedPrize={selectedPrize} selectedForwhom={selectedForwhom} />}
        </>

    );
}

export default AllCampaigns;