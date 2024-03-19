import { useEffect, useRef, useState } from 'react';
import FamilyTree from '../assets/FamilyTree.jpg';
import coverVideo from '../assets/Newspaper.mp4';
import timelineData from '../assets/TimelineData.json';
import Funeral from '../assets/photoDocs/Funeral.jpg';
import KKKNewspaper from '../assets/photoDocs/KKKNewspaper.png';
import RailroadStation from '../assets/photoDocs/RailroadStation.jpg';
import Residence from '../assets/photoDocs/Residence.png';
import styles from './Home.module.scss';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const HoverImage = ({coords}) => {
    return (
        <div
            style={{
                zIndex: 9997,
                position: 'fixed',
                left: coords.x,
                top: coords.y,
                pointerEvents: 'none',
            }}
        >
            <p>Hover blue text to reveal images</p>
        </div>
    );
};

const timelineBarColors = {
    0: '#39ff14',
    1: '#40a4ff',
    2: '#f72119',
};

const ScalingPeriod = ({period, mhRef}) => {
    const wrapperRef = useRef();
    const textRef = useRef();
    let offset = 0;
    let scale = 1;

    let max = 99999;
    if (mhRef.current != undefined) {
        max = mhRef.current.clientHeight + window.innerHeight - 300;
    }

    if (wrapperRef.current != undefined && textRef.current != undefined) {
        let viewportOffset = wrapperRef.current.getBoundingClientRect();
        let height = wrapperRef.current.clientHeight;
        if (viewportOffset.top < 0) {
            offset = -viewportOffset.top;
            scale = 1 - (offset / height);
            if (scale < 0.1) { scale = 0.1; }
            console.log(scale);
        } else {
            offset = 0;
            scale = 1;
        }
    }

    return (
        <div ref={wrapperRef} className={styles.timelineDate}>
            <h1
                ref={textRef}
                style={{ transform: `translateY(${Math.min(offset + 200 * scale - 200, max)}px) scale(${scale})` }}
            >
                {period}
            </h1>
        </div>
    );
};

const Timeline = ({index}) => {
    const [offset, setOffset] = useState(0);
    const ref = useRef();

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div>
            <ScalingPeriod period={timelineData[index].period} mhRef={ref}/>
            <div ref={ref}>
                {timelineData[index].points.map((data, i) => 
                    <div className={styles.timelinePoint}>
                        <h2>{data.title}</h2>
                        <h3>{data.date}</h3>
                        <p>{data.desc}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Home = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            })
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, []);

    
    return (
        <>
            <div className={styles.cover}>
                {/* need image of deceased and monument */}
                <video autplay autoPlay loop muted className={styles.coverVideo}>
                    <source src={coverVideo}/>
                </video>
                <div className={styles.videoOverlay}/>
                <div className={styles.grid}>
                    <div>
                        <h1>John Scott</h1>
                        <p>July 14, 1824 - Nov. 29, 1896</p>
                        <p>Created in 2024 by Micheal Huang, Rainer Arendt, Nathanael Kassahun, Gabriel Larosa, Aiden Sanxhaku, and Leonard Vekker</p>
                    </div>
                    <div>
                        <p>Through the corridors of legislation, the halls of justice, the bowels of infrastructure, and the sanctuaries of faith, John Scott’s monumental presence resonated like a melody lingering long after its final note had faded.
</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.intro}`} id='intro'>
                <h2>What is the <span className={styles.orange}>Cemetery Project</span>?</h2>
                <h3>Project Summary</h3>
                <p>
                    The much revered Cemetery Project is an annual historical research initiative undertaken by the 11th-grade A.P. United States History (APUSH) students at Julia Reynolds Masterman Laboratory and Demonstration High School. Students form groups to investigate and present their findings using various mediums. This project is designed to enhance students' historical and critical thinking skills, academic writing abilities, capacity for contextualization, and investigative ambition over several months.
                    <br/>
                    The project commences at the Woodlands Cemetery in West Philadelphia, a significant historical site where notable figures like surgeons, military officials, and university founders are laid to rest. Despite time constraints and specific guidelines, students have a wide array of untold stories to explore. In the early fall, all APUSH students visit the cemetery to select candidates for their research projects from among the graves. However, it is important to note that only certain deceased may be researched given time period restrictions and other specifications. Nevertheless, there are still thousands buried for students to choose from whose stories have yet to be researched. Once a singular candidate is chosen, groups delve into comprehensive research. 
                </p>
                <h3>Research</h3>
                <p>
                    Students are tasked with gathering primary and secondary sources from archives, virtual repositories, libraries, and online platforms to piece together their subject's life. Hours of research, drafting of texts, formatting of sources, and collaboration with groups culminate in the formation of a formal paper and a website— both detailing the context of the time period through which the subject lived, a biography, and summaries of evidence gathered through research. Typically, the project is submitted in late winter.
                </p>
                <h3>Synopsis</h3>
                <p>
                    From three final candidates found during the excursion to the Woodlands Cemetery, Hon. John Scott was selected as the focal point of research by this group due to the well established congressional records, intriguing affiliation with the Philadelphia Railroad Co., and an integral role in the world of antebellum and reconstruction politics. Born on July 14, 1824, in Huntingdon County, Pennsylvania, John Scott was a man of many talents; he led a multifaceted life filled with diverse roles and accomplishments. As an attorney, public official, and prospective Secretary of the Inner-Cabinet under President Grant, he navigated through tumultuous times, providing guidance during the Reconstruction era and handling cases of insurrection. His tenure as a Union Democrat in the Pennsylvania House of Representatives and later as a Republican United States Senator showcased his commitment to democratic values and non-partisan views. Beyond politics, Scott's legacy extended to the legal and educational spheres through his role as General Solicitor of the Pennsylvania Railroad Co. and as a trustee of the University of Pennsylvania. Despite his professional accolades, he cherished his roles as a loving son, brother, husband, father, and friend. Scott's contributions continue to resonate in not only Pennsylvania's, but the United States' history, marking him as a beacon of integrity and service. Yet, through it all, he maintained an unwavering commitment to his faith, morals, community, and family until his death in 1896.
                </p>
            </div>
            <div className={`${styles.section} ${styles.biography}`} id='biography'>
                <h2>Biography</h2>
                <object data="./assets/Biography.pdf" type="application/pdf" width="90%" height="90%"/>
            </div>
            <div className={`${styles.section} ${styles.timeline}`} id='timeline'>
                <h2>Timeline</h2>
                {timelineData.map((data, i) =>
                    <Timeline index={i}/>
                )}
            </div>
            <div className={`${styles.section} ${styles.photos}`} id='photos'>
                <h2>Photo Documentation</h2>
                <div>
                    <div>
                        <img src={RailroadStation}/>
                        <p>A picture of the Alexandria railroad station, the town that John Scott was born in</p>
                    </div>
                    <div>
                        <img src={Funeral}/>
                        <p>Church of John Scott’s funeral</p>
                    </div>
                    <div>
                        <img src={Residence}/>
                        <p>3808 Chestnut Street, Philadelphia, PA, the last residence of John Scott, his house is no longer there</p>
                    </div>
                    <div>
                        <img src={KKKNewspaper}/>
                        <p>John Scott played a key role in the KKK Act of 1871</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.documents}`} id='documents'>
                <h2>Documents</h2>
                <object data="./assets/Documents.pdf" type="application/pdf" width="90%" height="90%"/>
            </div>
            <div className={`${styles.section} ${styles.tree}`} id='tree'>
                <h2>Family Tree</h2>
                <img src={FamilyTree}/>
            </div>
            <HoverImage
                coords={coords}
            />
        </>
    );
};

export default Home;