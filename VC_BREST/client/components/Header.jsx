import React from 'react';
import Heading from "./Heading";
import {Button, Navbar} from "react-bootstrap";
import Link from "next/link";

const Header = () => {
    return (
        <hedear>
            <Navbar>
                <Heading tag='h3' text='SUPER SITE'/>
                <Link href={'/players'}>
                    <Button className={'btn-outline-light'}>Players</Button>
                </Link>
                <Link href={'/club'}>
                    <Button className={'btn-outline-light me-2 ms-2'}>Club</Button>
                </Link>
                <Link href={'/home'}>
                    <Button className={'btn-outline-light'}>Home</Button>
                </Link>
            </Navbar>

        </hedear>
    );
};

export default Header;
