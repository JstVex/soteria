'use client'

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import styles from '@/styles/donations/donation-main.module.css'
import Image from 'next/image';
import Forms from '@/components/forms';

const Donations = () => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng, setLng] = useState(95.6);
    // const [lat, setLat] = useState(20.4);
    // const [zoom, setZoom] = useState(4.5);

    // useEffect(() => {
    //     if (map.current) return;
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/light-v11',
    //         center: [lng, lat],
    //         zoom: zoom,
    //         scrollZoom: false
    //     });

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.491926, 26.020766])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kachin</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/kachin'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.199379, 16.871311])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>yangon</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/yangon'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.9593, 16.9459])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kayin</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/kayin'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.374800891, 19.234085732])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kayah</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/kayah'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([93.581269, 22.389675])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>chin</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/chin'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.6982, 16.3003])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>mon</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/mon'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([93.5813, 20.1041])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>rakhine</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/rakhine'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([98.1339, 22.0362])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>shan</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/shan'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.0891, 21.9588])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>mandalay</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/mandalay'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.4663, 17.8221])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>bago</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/bago'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([94.9455, 20.1544])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>magway</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/magway'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([95.1621, 22.9160])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>sagaing</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/sagaing'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([95.2267, 17.0342])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>ayeyarwady</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/ayeyarwady'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([99.0129, 12.4707])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>tanintharyi</p>
    //                 <div>
    //                     <a href='http://localhost:3006/donations/tanintharyi'>
    //                     visit this location
    //                     </a>
    //                 </div>`
    //             )
    //         )
    //         .addTo(map.current);
    // });

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });

    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.texts}>
                    <p className={styles.heading}>
                        Donations are essential for us
                    </p>
                    <p className={styles.subtext}>
                        Using apps and visiting websites and channels are great ways to support but there are others as well. Lots of help is needed in many areas throughout the country and the amount got from these aren&apos;t enough. That&apos;s why we must donate as much as we can every now and then to claim our victory faster.
                    </p>
                    <button className={styles.button}>
                        <div onClick={() => scrollToSection('map')}> Explore donations</div>
                    </button>
                </div>
                <div className={styles.imgs}>
                    <Image src="https://image.cnbcfm.com/api/v1/image/106839739-1613123898137-gettyimages-1231113111-AFP_92T7M6.jpeg?v=1613302267" alt="" className={styles.img1} width={1000} height={1000} />
                    <Image src="https://s.abcnews.com/images/International/children-myanmar-01-gty-iwb-210402_1617371953484_hpMain_16x9_1600.jpg" alt="" className={styles.img1} width={1000} height={1000} />
                    <Image src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/YNO64J3ITFLORGND37NJYHGEIA.jpg" alt="" className={styles.img1} width={1000} height={1000} />
                </div>
            </div>
            <div className={styles.second_section_ammo} >
                <div className={styles.wrap}>
                    <div className={styles.title}>
                        Weaponry, ammunitions and supplies
                    </div>
                    <div className={styles.text}>
                        Wars are happening throughout the country everyday and our brave comrades have to fight regardless of their age and gender. With bravery and justice on our side, we are winning but some of our comrades have fallen due to disadvantage in weaponries and ammunitions and lack of supplies. The only way they can get them in through our help. That&apos;s why we must donate more to prevent more deaths and injuries of our comrades and for the sake of our fallen comrades as well.
                    </div>
                    <div className={styles.text2}>
                        We can donate to some directly or through individuals or organizations who are doing as much as they can to support not just our PDFs in rural areas but also UGs who are working underground in major cities.
                    </div>
                </div>
                <Image className={styles.img} src="https://www.theglobeandmail.com/files/interactive/world/features/myanmar/images/TWZYRHFKA5GRZDOIS6GKCLXZGU_portrait_sm.jpg" alt="" width={1000} height={1000} />
            </div>

            <div className={styles.second_section_refugee}>
                <Image className={styles.img} src="https://s.abcnews.com/images/International/children-myanmar3-02-gty-iwb-210402_1617372495777_hpEmbed_3x2_992.jpg" alt="" width={1000} height={1000} />
                <div className={styles.wrap2}>
                    <div className={styles.title}>
                        Food, shelter and needs for our war victims
                    </div>
                    <div className={styles.text}>
                        As wars progress, more and more people including women, old prople and children are becoming the victims of them. It is because of these inhumane bastards destroying every village they could find, dropping bombs on them, burning the whole village, catching and burning a lot of innocent people alive, raping and torturing many women and killing even children as well. These savages won&apos;t stop until they are put down for good. Because of them, thousands of innocent people have lost their home and love ones and the number keep rising everyday.
                    </div>
                    <div className={styles.text2}>
                        We must save our own people by giving any form of help and warmth we can.
                        They need not only basic needs such as food, clean water, clothes and shelter but also medicine for many kind of diseases, education for children and many more.
                    </div>
                </div>
            </div>

            <div className={styles.second_section_cdm}>
                <div className={styles.wrap}>
                    <div className={styles.title}>
                        Civil Disobedience movements
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores numquam alias obcaecati expedita? Reprehenderit culpa, autem minus numquam doloribus beatae modi id at amet, dolore, sed eius magnam nesciunt?
                        Esse a fuga ex repudiandae omnis animi sed nemo officiis voluptatem eligendi ducimus, quisquam nam, ipsam expedita at debitis eos beatae deserunt atque obcaecati pariatur dolor vero aperiam architecto! Dolore.
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quas, non voluptas blanditiis dolores deleniti unde facere explicabo, maiores neque ratione architecto laborum quia quam minus reprehenderit. Beatae, blanditiis minus.
                    </div>
                </div>
                <Image className={styles.img} src="https://images.unsplash.com/photo-1616990631818-93ec3312f55a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={1000} height={1000} />
            </div>

            <div className={styles.third_section}>
                <div className={styles.flex}>
                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>8000</span>
                            <span className={styles.unit}>plus</span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>People killed</span> by these junta troops since February 2021. People of every gender and age are killed in many brutal ways including getting shot, burnt alive, tortured to death, hung and many more. These include more than 500 women and 200 children.
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>20000</span>
                            <span className={styles.unit}>and more</span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>Arrests </span>
                            have happened and many of them got tortured in many forms and some even got killed in the process. Lots of people are still detained in an inhumane way and getting tortured. There have been many cases of getting arrested one day and the body is sent back the next day.
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>10000</span>
                            <span className={styles.unit}>and counting</span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>Victims of war </span>
                            are deserting their home villages and towns which of most are burnt to dust and running for their lives and seeking for shelter in lots of areas all around the country. These include many children, women and old people and many of them don&apos;t have necessary support.
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.map_heading} id='map'>
                <span className={styles.map_heading_span}>
                    Browse and Donate for each location
                </span>
            </div>
            {/* <div ref={mapContainer} className="map-container" /> */}

            <Forms />
        </div >
    );
}

export default Donations;