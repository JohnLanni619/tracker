import Head from 'next/head'
import Nav from './Nav'

export default function Layout({children}) {
    return(
        <div>
            <Head>
                <title>Tracker</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>

            <main>{children}</main>
        </div>
    )
}