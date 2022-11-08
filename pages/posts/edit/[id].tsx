import React, { useState } from 'react'
import Router from 'next/router'
import axios from 'axios';
import { GetServerSideProps } from 'next/types'
import { PostProps } from '../index'
import api, { csrf } from '../../../lib/api'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${context.params?.id}`)
    const res = await req.json()
    return {
        props: {
            post: res.data,
            message: res.message,
            status: res.success,
        },
    }
}

const PostEdit: React.FC<PostProps> = ({ post, message, status }) => {
    // console.log(cont.req)
    const [image, setImage] = useState("")
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const [validation, setValidation] = useState({})

    const handleFileChange = (e: any) => {
        const imageData = e.target.files[0]
        if (!imageData.type.match('image.*')) {
            setImage('')
            return
        }
        setImage(imageData)
    }

    const updatePost = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('content', content)
        formData.append('_method', 'PUT')
        await csrf()
        api.post(`/api/posts/${post.id}`, formData)
            .then(() => {
                Router.push('/posts')
            })
            .catch((error) => {
                console.log(error)
                // setValidation(error.response.data)
            })
    }

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <form onSubmit={updatePost}>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Image</label>
                                    <input type="file" className="form-control" onChange={handleFileChange} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="input Title" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="input Content" />
                                </div>
                                <button className="btn btn-primary border-0 shadow-sm" type="submit">
                                    update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default PostEdit