import Link from 'next/link';
import { GetServerSideProps } from 'next/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import api from '../../lib/api'
const getServerSideProps: GetServerSideProps = async (context) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`)
    const res = await req.json()
    // console.log(context)
    // let output = [
    //     {
    //         id: 5,
    //         title: 'title1',
    //         content: 'ini deskripsi',
    //         image: 'c1nByCsiC8lO9UYYPXxCmyjJAskDZtPYhIYMlu4c.png'
    //     }
    // ]

    return {
        props: {
            posts: res.data.data
        },
    }
}

const PostIndex: React.FC<Props> = (props) => {
    const { posts } = props;
    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    }

    const deletePost = async (id: any) => {
        const fOption = {
            method: 'DELETE'
        }
        api.delete(`/api/posts/${id}`, fOption);
        refreshData();

    }
    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 shadow-sm rounded-3">
                        <div className="card-body">
                            <Link href="/posts/create">
                                <button className="btn btn-primary border-0 shadow-sm mb-3">add</button>
                            </Link>
                            <table className="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">image</th>
                                        <th scope="col">title</th>
                                        <th scope="col">content</th>
                                        <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post: IPost) => (
                                        <tr key={post.id}>
                                            <td className="text-center">
                                                <Image
                                                    priority
                                                    className="rounded-3"
                                                    alt='post-images'
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/posts/${post.image}`}
                                                    width="150"
                                                    height="150"
                                                />
                                            </td>
                                            <td>{post.title}</td>
                                            <td>{post.content}</td>
                                            <td className="text-center">
                                                {/* <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">edit</button> */}
                                                <Link href={`/posts/edit/${post.id}`}>
                                                    <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">edit</button>
                                                </Link>
                                                {/* <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">delete</button> */}
                                                <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger border-0 shadow-sm mb-3">delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostIndex

export {
    getServerSideProps,
}
export type {
    IPost,
    Props as PostProps
}

interface IPost {
    id?: any
    title: string
    content: string
    image: string
}
type Props = {
    posts: IPost[]
    post: IPost
    message: string
    status: string
}
