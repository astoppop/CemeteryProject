// import docImages from '../assets/docs';
import coverVideo from '../assets/Newspaper.mp4';
import styles from './Home.module.scss';

const Home = () => {
    // console.log(docImages);
    return (
        <>
            <div className={styles.cover}>
                <video autplay autoPlay loop muted className={styles.coverVideo}>
                    <source src={coverVideo}/>
                </video>
                <div className={styles.videoOverlay}/>
                <div className={styles.grid}>
                    <div>
                        <h1>John Scott</h1>
                        <p>July 14, 1824 - Nov. 29, 1896</p>
                    </div>
                    <div>
                        <p>AIDEN YAP fiewajpfi ojeawio <span className={styles.orange}>fjaewiof</span> ejwaio fweajoipf waej fpoiweajfoieaw</p>
                    </div>
                </div>
            </div>
            <div>
                <p>
                The much revered Cemetery Project is an annual historical research initiative undertaken by the 11th-grade A.P. United States History (APUSH) students at Julia Reynolds Masterman Laboratory and Demonstration High School. . Students form groups to investigate and present their findings using various mediums. This project is designed to enhance students' historical and critical thinking skills, academic writing abilities, capacity for contextualization, and investigative ambition over several months. 

        The project commences at the Woodlands Cemetery in West Philadelphia, a significant historical site where notable figures like surgeons, military officials, and university founders are laid to rest. Despite time constraints and specific guidelines, students have a wide array of untold stories to explore. In the early fall, all APUSH students visit the cemetery to select candidates for their research projects from among the graves. However, it is important to note that only certain deceased may be researched given time period restrictions and other specifications. Nevertheless, there are still thousands buried for students to choose from whose stories have yet to be researched. Once a singular candidate is chosen, groups delve into comprehensive research.

        Students are tasked with gathering primary and secondary sources from archives, virtual repositories, libraries, and online platforms to piece together their subject's life. Hours of research, drafting of texts, formatting of sources, and collaboration with groups culminate in the formation of a formal paper and a website— both detailing the context of the time period through which the subject lived, a biography, and summaries of evidence gathered through research. Typically, the project is submitted in late winter. 

        From three final candidates found during the excursion to the Woodlands Cemetery, Hon. John Scott was selected as the focal point of research by this group due to the well established congressional records, intriguing affiliation with the Philadelphia Railroad Co., and an integral role in the world of antebellum and reconstruction politics. Born on July 14, 1824, in Huntingdon County, Pennsylvania, John Scott was a man of many talents; he led a multifaceted life filled with diverse roles and accomplishments. As an attorney, public official, and prospective Secretary of the Inner-Cabinet under President Grant, he navigated through tumultuous times, providing guidance during the Reconstruction era and handling cases of insurrection. His tenure as a Union Democrat in the Pennsylvania House of Representatives and later as a Republican United States Senator showcased his commitment to democratic values and non-partisan views. Beyond politics, Scott's legacy extended to the legal and educational spheres through his role as General Solicitor of the Pennsylvania Railroad Co. and as a trustee of the University of Pennsylvania. Despite his professional accolades, he cherished his roles as a loving son, brother, husband, father, and friend. Scott's contributions continue to resonate in not only Pennsylvania's, but the United States' history, marking him as a beacon of integrity and service. Yet, through it all, he maintained an unwavering commitment to his faith, morals, community, and family until his death in 1896.   

        With this brief synopsis, a mere iota of what the Cemetery Project truly embodies was captured. The toil, commitment, and cherished memories forged in the process will continue to remain as not only a tribute to John Scott, but also a testament to historical studies as a whole.

                </p>
            </div>
        </>
    );
};

export default Home;