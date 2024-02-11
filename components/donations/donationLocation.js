'use client'

import styles from '@/styles/donations/donations.module.css';
import Donation from "./donation";
import { useState } from 'react';
import Modal from '@/components/modal';

const DonationLocation = ({ donations }) => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    return (
        <>
            <div className={styles.heading}>
                <span className={styles.heading_content}>Donations</span>
            </div>
            <div className={styles.content}>
                {donations && donations.map((donation) => {
                    return <Donation donation={donation} key={donation._id} setSelectedTitle={setSelectedTitle}
                        setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedPayment={setSelectedPayment} />
                })}
            </div>
            {selectedTitle && <Modal key={selectedText} setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedPayment={selectedPayment} />}
        </>
    );
}

export default DonationLocation;