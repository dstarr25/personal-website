import React from 'react';
import { motion } from 'framer-motion';

const ViewDiv = ({ children, variants, className, style }) => {
    return (
        <motion.div
            style={style}
            className={className}
            initial="hide"
            whileInView="show"
            variants={variants}
            viewport={{ once: true }}

        >
            {children}
        </motion.div>
    );
};

export default ViewDiv;
