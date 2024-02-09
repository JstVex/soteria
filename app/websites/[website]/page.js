import styles from "@/styles/websites/website.module.css";
import Posts from "@/components/websites/posts";

async function getWebsite(website) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/websites/${website}`);
    const data = await res.json();
    return data;
}

export default async function Website({ params }) {
    const posts = await getWebsite(params.website);
    let slide = -1;

    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <p className={styles.website}>{posts[0].website.toUpperCase()}</p>
            </div>
            {posts[0].titles.length === 0 && (
                <div className={styles.warn}>
                    Sorry, {posts[0].website} is not available right now.
                </div>
            )}
            {posts && posts[0].titles.length !== 0 && posts.map((post) => {
                slide++;
                return <Posts post={post} key={post._id} slide={slide} />
            })}
        </div >
    );
}