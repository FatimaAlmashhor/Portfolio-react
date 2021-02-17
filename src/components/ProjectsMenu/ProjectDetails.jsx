import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetails({ transition, show }) {
    return (
        <motion.div
            initial={{
                x: 0,
            }}
            animate={{
                x: 100,
            }}
            exit={{
                x: 0
            }}
            transition={transition}
            className=" w-4/6 bg-gray-800" >
            <h2 className="text-white">{show.title}</h2>
        </motion.div>
    )
}
