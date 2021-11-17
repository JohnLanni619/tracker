import Link from 'next/link'

export default function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About Us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}