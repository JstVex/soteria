'use client'

import styles from '@/styles/donations/donation-main.module.css'
import DonationForm from '@/components/donations/donationForm';
import CampaignForm from '@/components/donations/campaignForm';
import { useState } from 'react';

const Forms = () => {
    const [selectedForm, setSelectedForm] = useState('donations');

    const selectForm = (form) => {
        setSelectedForm(form);
    }

    return (
        <div className={styles.forth_section}>
            <div className={styles.flex2}>
                <div className={styles.add}>
                    <div className={styles.add_heading}>
                        Help us add more
                    </div>
                    <div className={styles.add_text}>
                        You can also help by adding any related donation or campaign posts here. These will be processed and added within a day or two.
                    </div>
                </div>
                <div className={styles.choose_form}>
                    <div className={`${styles.choose_donations} ${selectedForm === 'donations' ? styles.selectedForm : ''}`} onClick={() => selectForm('donations')}>
                        Donations
                    </div>
                    <div className={`${styles.choose_donations} ${selectedForm === 'campaigns' ? styles.selectedForm : ''}`} onClick={() => selectForm('campaigns')}>
                        Campaigns
                    </div>
                </div>
                <div className={styles.flex3}>
                    {selectedForm === 'donations' ?
                        <DonationForm /> :
                        <CampaignForm />
                    }
                </div>
            </div>
        </div>
    );
}

export default Forms;