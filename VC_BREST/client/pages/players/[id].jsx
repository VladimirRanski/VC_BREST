import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Heading from "../../components/Heading";

export default function () {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>
            <Heading tag='h3' text={`Пользователь с id ${query.id}`}/>
            <Link href={'/players'}>Назад</Link>
        </div>
    );
};
