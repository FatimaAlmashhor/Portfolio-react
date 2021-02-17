import React from 'react'
import './about.scss';
import { motion } from 'framer-motion';
function About() {
    // const [scroll, setScroll] = React.useState(window.innerHeight || 0);
    // React.useEffect(() => {
    //     window.addEventListener(
    //         "scroll",
    //         () => {
    //             setScroll(window.pageYOffset + window.innerHeight);
    //         }
    //     );
    // }, []);

    return (
        <div className=" about-section w-full  pt-20 text-white"  >
            <motion.h2 className="title" >About me</motion.h2>
            <div className="flex w-full overflow-hidden">
                <motion.div className="text-right w-6/12 mt-32" >
                    <p>Goal-driven full stack web developer with a growing passion
                    for website development. My technical experience includes
                        web-based programming (HTML, CSS, JavaScript, React) with a background in databases. I discovered web development by pursuing a degree in IT Engineering and participating in Re:Coded’s Front-End Web Development bootcamp. I bring strong skills in time-management, team-building, and creativity to assist companies in making their visions for websites and mobile apps into reality</p>
                </motion.div>
                <motion.div className=" blob w-3/6 justify-self-end mr-0 ml-auto  right-0 overflow-hidden "

                    style={{

                    }}
                    initial={{
                        scale: 1.4
                    }}
                >
                    <svg viewBox="0 0 200 200" className=" w-11/12 mt-0" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FA4D56" d="M32.9,-54.4C43.1,-51.2,51.9,-43.1,60.8,-33.3C69.6,-23.4,78.5,-11.7,81.1,1.5C83.7,14.7,80,29.4,71.3,39.5C62.6,49.6,48.8,55.2,36.1,60.8C23.4,66.4,11.7,72,0.5,71.1C-10.7,70.3,-21.4,63,-34.2,57.4C-47,51.9,-61.7,48,-65,38.7C-68.3,29.5,-60.1,14.7,-58.6,0.9C-57.2,-13,-62.4,-26,-60.6,-37.9C-58.8,-49.7,-49.9,-60.3,-38.6,-62.8C-27.3,-65.2,-13.6,-59.6,-1.1,-57.6C11.4,-55.7,22.8,-57.5,32.9,-54.4Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}
export default About