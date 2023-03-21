import Link from "next/link";

const Index = () => {
    return (
        <div>
           <h1>User list:</h1>
            <ul>
                <li ><Link href={`/players/1`}>Test1</Link></li>
                <li ><Link href={`/players/2`}>Test2</Link></li>
                <li ><Link href={`/players/3`}>Test3</Link></li>
            </ul>
        </div>
    );
};

export default Index;
