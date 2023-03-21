import React from 'react';
import Heading from "./Heading";
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Heading tag='h3' text='2023@Zloylis'/>
        </footer>
    );
};

export default Footer;
