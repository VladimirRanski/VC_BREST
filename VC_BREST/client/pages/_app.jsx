import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.scss'
import React from "react";
import Layout from "../components/Layout";

const _app = ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
);

export default _app;
