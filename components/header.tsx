import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
    const handleSignin = (e: any) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e: any) => {
        e.preventDefault()
        signOut()
    }

    const { data: checkSession } = useSession();

    return (
        <div className='header'>
            <Link href='/'>
                <a className='logo'>AppLogo</a>
            </Link>
            {!checkSession && <a href="#" onClick={handleSignin} className="btn-signin">Masuk</a>}
            {checkSession && <a href="#" onClick={handleSignout} className="btn-signin">keluar</a>}
        </div>

    )
}