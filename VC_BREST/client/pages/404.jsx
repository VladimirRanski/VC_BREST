import React from 'react';
import Heading from "../components/Heading";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
         <Heading tag='h1' text="404"/>
         <Heading tag='h2' text="something is going wrong..."/>
            <Link href={'/home'}>Back</Link>
        </div>
    );
};

export default ErrorPage;
