import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from "popmotion";
import React from 'react';
import { useState } from "react";
import './project.scss'
import { projectData } from '../../projectData';
const transition = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        // zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            // zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const ProjectsSection = ({ context }) => {

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, projectData.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <div className="project-section section" >
            <h2 className="title">Projects </h2>
            <div className="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F1C21B" d="M36.4,-52.3C47.9,-41.7,58.5,-32.1,65.7,-19.2C72.8,-6.3,76.5,9.9,74.5,26.7C72.5,43.5,64.7,61,51.4,68C38,75.1,19,71.7,-0.3,72.1C-19.6,72.5,-39.2,76.7,-50.8,69.1C-62.4,61.5,-66.1,42.1,-72.1,23.5C-78,4.8,-86.4,-13,-84.3,-29.9C-82.3,-46.9,-69.9,-63,-54.1,-72.2C-38.3,-81.4,-19.1,-83.8,-3.4,-79.2C12.4,-74.5,24.8,-62.9,36.4,-52.3Z" transform="translate(100 100)" />
                </svg>
            </div>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className="overflow-hidden"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        // x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.6 }
                    }}
                >

                    <motion.img
                        initial={{
                            scale: 1.5
                        }}
                        animate={{
                            scale: 1
                        }}
                        className="project-img"
                        src={projectData[imageIndex].image}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        style={{ width: projectData[imageIndex].width }}
                    />
                    <motion.div

                        className="project-descript"
                    >
                        <motion.div
                            initial={{
                                y: -100
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={transition}
                            className="project-descript-item ">
                            <p>{projectData[imageIndex].title}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default ProjectsSection;