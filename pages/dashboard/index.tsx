import Head from 'next/head'
import Header from 'components/header'
import styles from 'styles/Home.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <div className={styles.container}>
            <Head>
                <title>Nextjs | Next-Auth</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Header /> */}
            <main className={styles.main}>
                <div className={styles.user}>
                    {loading && <div className={styles.title}>Loading...</div>}
                    {
                        session ?
                            <>
                                <h1 className={styles.title}>Welcome, {session.user?.name ?? session.user?.email}!</h1>
                                <p style={{ marginBottom: '10px' }}> </p> <br />
                                <Image
                                    width={200}
                                    height={200}
                                    src={session.user?.image as string}
                                    alt="user-icon"
                                    className={styles.avatar} />
                            </> :
                            <div className='d-flex justify-content-center'>
                                <Image
                                    width={100}
                                    height={100}
                                    src="/icon.png"
                                    alt="login-icon"
                                    className={styles.avatar} />
                                <p className={styles.title} style={{ margin: '100 200 220 200' }}>Please log in to continue</p>

                            </div>
                    }
                </div>
            </main>
        </div>
    )
}