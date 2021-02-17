import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParallaxItem(props) {
    const { scroll, children, ...rest } = props;
    let speed = props.speed || -0.02;

    const [y, setY] = useState();
    const element = useRef();
    useEffect(() => {
        if (element) {
            window.addEventListener(
                "scroll",
                () => {
                    setY(element.current.getBoundingClientRect().top)
                }
            )
        }
    }, [])
    return (
        <motion.div
            ref={element}
            initial={{ opacity: 1 }}
            animation={{
                opacity: scroll > y ? 1 : 0,
                y: (scroll - y) * speed
            }}
            transition={{ duration: 0.5 }}
            {...rest}
        >
            {children}
        </motion.div>
    )
}
