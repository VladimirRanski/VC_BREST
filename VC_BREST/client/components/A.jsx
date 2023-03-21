import Link from "next/link";

export default function ({text, href}){
    return(
        <Link href={href}>
            {text}
        </Link>
    )
}