import React, { useState, useEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import '../App.scss'
import Hello from '../assets/images/hello.svg'
import ProjectsSection from '../components/Projects/ProjectsSection'
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import { useRefScrollProgress } from '../Hook/useRefScrollProgress'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const firstName = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.8,
            staggerChildren: 0.04,
            staggerDirection: -1,
            ...transition
        },
    },
};

const lastName = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.8,
            staggerChildren: 0.04,
            staggerDirection: 1,
            ...transition
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1.7, ...transition },
    },
};
export default function Home() {
    const elementRef = React.useRef();
    // const { ref, start, end } = useRefScrollProgress(elementRef)
    const [canScroll, setCanScroll] = useState(false);
    const { scrollYProgress, scrollY } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 2.55]);
    // const Y1 = useTransform(scrollY, start, end);

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    })
    useEffect(() => {
        if (!canScroll) {
            document.querySelector('body').classList.add('no-scroll');
        }
        else {
            document.querySelector('body').classList.remove('no-scroll');
        }

    }, [canScroll])
    useEffect(() => {
        console.log(scale);
    }, [{ useViewportScroll }])
    return (
        <div >
            <Navbar />
            <motion.div
                onAnimationComplete={() => setCanScroll(true)}
                initial='initial'
                animate='animate'
                exit={{
                    opacity: 0,
                    translate: transition
                }}
                className="home-section "
            >

                <div className="hero section flex flex-col lg:flex-row ">
                    <div className="name-side w-full lg:w-3/5">
                        <motion.div variants={firstName} className="my-name sm:text-9xl md:text-6xl">
                            <motion.span variants={letter}>F</motion.span>
                            <motion.span variants={letter}>A</motion.span>
                            <motion.span variants={letter}>T</motion.span>
                            <motion.span variants={letter}>I</motion.span>
                            <motion.span variants={letter}>M</motion.span>
                            <motion.span variants={letter}>A</motion.span>
                        </motion.div>
                        <motion.div variants={lastName} className="my-last-name md:text-6xl">
                            <motion.span variants={letter}>A</motion.span>
                            <motion.span variants={letter}>L</motion.span>
                            <motion.span variants={letter}>M</motion.span>
                            <motion.span variants={letter}>A</motion.span>
                            <motion.span variants={letter}>S</motion.span>
                            <motion.span variants={letter}>H</motion.span>
                            <motion.span variants={letter}>H</motion.span>
                            <motion.span variants={letter}>O</motion.span>
                            <motion.span variants={letter}>R</motion.span>
                        </motion.div>
                        <motion.div className="contect-me" initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.6, duration: 2, ...transition },
                            }}>
                            <span>fatima.alamshhor@gmail.com</span>
                            <span>@FatimaALmshhor</span>
                        </motion.div>
                    </div>
                    <div className="code-side  w-full lg:w-2/3">
                        <div className="blob  w-2/6 md:w-5/6">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#08BDBA" d="M38.3,-54.4C49.8,-44.4,59.2,-33.4,66.2,-19.7C73.2,-6,77.7,10.4,73.7,24.2C69.6,38.1,56.9,49.5,43.2,57.1C29.5,64.8,14.7,68.7,-1.1,70.2C-17,71.8,-34,70.9,-47.5,63.2C-60.9,55.5,-71,40.9,-72.4,26C-73.9,11.1,-66.8,-4.2,-62.3,-20.9C-57.8,-37.7,-55.9,-56,-45.9,-66.4C-36,-76.9,-18,-79.5,-2.3,-76.4C13.4,-73.2,26.8,-64.3,38.3,-54.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                        <motion.img style={{ scale }} className="hello-command hidden lg:block " src={Hello} alt="Hi" />
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2, duration: 1, ...transition },
                        }}
                        className="scrolling-down"></motion.div>
                </div>
                <About />
                <ProjectsSection />
            </motion.div>
        </div>
    )
}
