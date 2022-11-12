import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Authbar = () => {
    const handleSignin = (e: any) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e: any) => {
        e.preventDefault()
        signOut()
    }

    const { data: session } = useSession();

    return (
        <div className='header'>
            {
                !session &&
                <Link href="" onClick={handleSignin} className="mx-2 btn btn-light">Masuk</Link>
            }
            {
                session &&
                <Link href="" onClick={handleSignout} className="mx-2 btn btn-danger">Keluar</Link>
            }
        </div>

    )
}
export default Authbar