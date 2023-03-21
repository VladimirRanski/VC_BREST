import React from 'react';
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Heading text='Главная страница'/>
        </div>
    );
};

export default Home;
