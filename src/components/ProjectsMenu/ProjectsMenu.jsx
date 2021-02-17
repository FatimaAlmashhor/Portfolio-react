import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames'
import './projectMenu.scss'

import { Link, useHistory } from 'react-router-dom';
import { projectData } from '../../projectData';
import ProjectDetails from './ProjectDetails';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function ProjectsMenu() {
    const [hover, setHover] = useState(
        {
            ecommerce: false,
            exhale: false,
            hangman: false,
            covid: false
        });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [clickedProject, setClickedProject] = useState({});

    const history = useHistory();
    const imgRef = useRef({});
    const testRef = useRef();
    const classNames = classnames(
        'mt-8 mb-12 hover:text-gray-500 ',
    )
    useEffect(() => {
        getBgImage();
        document.addEventListener('mousemove', onMouseMove);
        return () => document.removeEventListener('mousemove', onMouseMove);

    }, [hover]);

    useEffect(() => {
        let x = testRef.current.getBoundingClientRect().left +
            document.documentElement.scrollLeft +
            testRef.current.offsetWidth / 2;

        console.log(x);
    })

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    const list = {
        initial: {
            y: 400,
        },
        animate: {
            y: 0,
            transition: { delay: 0.6, duration: 1, ...transition },
        },
    };
    const handleClick = (e) => {
        let whichCliked = e.target.value;
        let result;
        if (whichCliked === 'ecommerce')
            result = projectData[0];
        else if (whichCliked === 'exhale')
            result = projectData[1];
        else if (whichCliked === 'hangMan')
            result = projectData[2];
        else if (whichCliked === 'covid')
            result = projectData[3];

        setClickedProject(result);
        // e.target.classList += ' text-gray-500  border-b-4';
        setClicked(!clicked);
    }

    const getBgImage = () => {
        if (hover.ecommerce) {
            imgRef.current = projectData[0];
            return;
        }
        else if (hover.exhale) {
            imgRef.current = projectData[1];
            return;
        }
        else if (hover.hangman) {
            imgRef.current = projectData[2];
            return;
        }
        else if (hover.covid) {
            imgRef.current = projectData[3];
            return;
        }

        else
            imgRef.current = '';
    }
    return (
        <AnimatePresence>
            <motion.div
                className=" project-board w-full h-screen min-h-full m-0 p-0 overflow-hidden"
                initial={{
                    width: 0,
                }}
                animate={{
                    width: '100%',
                    transition: transition
                }}
            >
                <motion.div>
                    <nav className="flex w-full absolute top-0 left-0 px-8 py-4">
                        <Link to='/'>
                            <div>HOME</div>
                        </Link>
                        <div
                            onClick={() => {
                                if (clicked) {
                                    setClicked(false);
                                }
                                else {
                                    history.goBack();
                                }
                            }}
                            className={`flex-1 justify-end text-right z-10 ${!clicked ? 'text-black' : 'text-white'}`}
                        >
                            CLOSE
                        </div>
                    </nav>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                    }}
                    animate={{
                        x: '0',
                    }}

                    transition={transition}
                    className={` w-full h-full text-center my-auto  flex flex-row `}>
                    <motion.ul className={` ${clicked ? 'w-2/6 text-left ml-5' : 'w-full text-center'} pt-20 text-5xl h-full mt-20 transition-all duration-300`}>
                        <motion.li
                            value='ecommerce'
                            variants={list}
                            className={classNames}
                            onClick={handleClick}
                            onMouseOver={() => setHover({ ...hover, ecommerce: true })}
                            onMouseOut={() => setHover({ ...hover, ecommerce: false })}
                        >
                            E-Commerce
                        </motion.li>
                        <motion.li
                            value='exhale'
                            variants={list}
                            className={classNames}
                            onClick={handleClick}
                            onMouseOver={() => setHover({ ...hover, exhale: true })}
                            onMouseOut={() => setHover({ ...hover, exhale: false })}
                        >
                            Exhale
                        </motion.li>
                        <motion.li
                            value='HangMan'
                            variants={list} className={classNames}
                            onClick={handleClick}
                            onMouseOver={() => setHover({ ...hover, hangman: true })}
                            onMouseOut={() => setHover({ ...hover, hangman: false })}
                        >
                            Hang Man Game
                        </motion.li>
                        <motion.li
                            ref={testRef}
                            value='covid'
                            variants={list}
                            className={classNames}
                            onClick={handleClick}
                            onMouseOver={() => setHover({ ...hover, covid: true })}
                            onMouseOut={() => setHover({ ...hover, covid: false })}
                        >
                            Covid App
                        </motion.li>

                    </motion.ul>
                    <div className="absolute " style={{ top: position.y - 100, left: position.x + 200 }}>
                        <img ref={imgRef} src={imgRef.current !== '' ? imgRef.current.image : ''} alt='img' />
                    </div>
                    {clicked &&
                        <ProjectDetails transition={transition} show={clickedProject} />
                    }
                </motion.div>
            </motion.div>
        </AnimatePresence>

    )
}
