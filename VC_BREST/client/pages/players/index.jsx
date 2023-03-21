import Link from "next/link";
import {useEffect, useState} from "react";
import A from "../../components/A";
import a from "../../components/A";

const Index = ({players}) => {


    return (
        <div>
           <h1>User list:</h1>
            <ul>
                {players.map(player =>
                    <li key={player.id}>
                        <A href={`/players/${player.id}`} text={player.name}/>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Index;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const players = await response.json()

    return {
        props: {players}, // will be passed to the page component as props
    }
}