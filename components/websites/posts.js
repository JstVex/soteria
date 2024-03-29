'use client'

import styles from "@/styles/websites/website.module.css"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import ShowPosts from "./showPosts";

const Posts = ({ post, slide }) => {
    const slideLeft = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        slider.scrollLeft = slider.scrollLeft - 310
    }

    const slideRight = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        slider.scrollLeft = slider.scrollLeft + 310
    }

    let i = -1;
    return (
        <>
            <div className={styles.heading}>
                <span className={styles.topic_title}>{post.topic.toUpperCase()}</span>
            </div>
            <div className={styles.wrap}>
                {(post.titles.length > 3 || windowSize.width <= 1212) && (
                    <BsFillCaretLeftFill className={styles.scroll_icon_left} onClick={slideLeft} />
                )}
                <div className={`slide ${styles.topic}`}>
                    {post.titles.map((title) => {
                        i++
                        return <ShowPosts post={post} key={post._id} i={i} />
                    })}
                </div>
                {(post.titles.length > 3 || windowSize.width <= 1212) && (
                    <BsFillCaretRightFill className={styles.scroll_icon_right} onClick={slideRight} />
                )}
            </div>

        </>
    );
}

export default Posts;