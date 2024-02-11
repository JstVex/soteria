import styles from "@/styles/footer.module.css"
import Link from "next/link";

const links = [
    {
        title: "websites",
        href: "/websites"
    },
    {
        title: "youtube",
        href: "/youtube"
    },
    {
        title: "donations",
        href: "/donations"
    },
    {
        title: "campaigns",
        href: "/campaigns"
    }
]

const news = [
    {
        title: "Mizzima News",
        href: "https://www.mizzima.com/"
    },
    {
        title: "The Irrawaddy",
        href: "https://www.irrawaddy.com/"
    },
    {
        title: "Frontier Myanmar",
        href: "https://www.frontiermyanmar.net/en/"
    },
    {
        title: "Myanmar Now",
        href: "https://www.myanmar-now.org/en"
    }
]

const facebookPages = [
    {
        title: "The Irrawaddy",
        href: "https://www.facebook.com/TheIrrawaddy/"
    },
    {
        title: "Mizzima News",
        href: "https://www.facebook.com/MizzimaNews/"
    },
    {
        title: "Frontier Myanmar",
        href: "https://www.facebook.com/FrontierMyanmar/"
    },
    {
        title: "Myanmar Now",
        href: "https://www.facebook.com/myanmarnowenglish/"
    }
]

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <h4 className={styles.heading}>
                        Quick Links
                    </h4>
                    <ul className={styles.list}>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.heading}>
                        News
                    </h4>
                    <ul className={styles.list}>
                        {news.map((news, index) => (
                            <li key={index}>
                                <a href={news.href} target="_blank">
                                    {news.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.heading}>
                        Facebook Pages
                    </h4>
                    <ul className={styles.list}>
                        {facebookPages.map((page, index) => (
                            <li key={index}>
                                <a href={page.href} target="_blank">
                                    {page.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.copyright_wrap}>
                <p className={styles.copyright}>
                    &copy; 2022 Soteria. All rights reserved.
                </p>
                <p className={styles.dev}>
                    Made with ❤️ & 🕊 by <a href="https://heinhtetlulu.vercel.app" target="_blank" className={styles.name}>JstVex</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;