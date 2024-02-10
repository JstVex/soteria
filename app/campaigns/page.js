import styles from "@/styles/campaigns/campaign-main.module.css"
import CampaignImage from "@/components/campaigns/campaignImage";
import AllCampaigns from "@/components/campaigns/allCampaigns";

async function getCampaigns() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/campaigns`)
    const data = await res.json();
    return data;
}

export default async function Campaigns() {
    const campaigns = await getCampaigns();

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.texts}>
                    <p className={styles.heading}>
                        Many campaigns are available as well
                    </p>
                    <p className={styles.subtext}>
                        To persuade more people into donations, many individuals and organizations have came up with campaigns which are basically donations but with prizes. These are in the form of lotteries tickets for big prizes or gift cards or subscriptions or many more.
                    </p>
                    {/* <button className={styles.button}>
                        <div onClick={() => scrollToSection('explore')}>
                            Explore campaigns
                        </div>
                    </button> */}
                </div>
                <div className={styles.imageSection} style={{ width: `${campaigns.length * 200}%` }}>
                    {campaigns.map((campaign, index) => {
                        return (
                            <CampaignImage campaign={campaign} key={campaign._id + index} />
                        );
                    })}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate1" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate2" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate3" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate4" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate5" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate6" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate7" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate8" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate9" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImage campaign={campaign} key={campaign._id + "duplicate10" + index} />
                    ))}
                </div>
            </div>
            <div id='explore'>
                <AllCampaigns campaigns={campaigns} />
            </div>

        </div >

    );
}