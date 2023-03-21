import React from 'react';
import {Button} from "react-bootstrap";
import Link from "next/link";

const MyComponent = () => {
    return (
        <div>
            <Link href={'/players'}>Назад</Link>
        </div>
    );
};

export default MyComponent;
