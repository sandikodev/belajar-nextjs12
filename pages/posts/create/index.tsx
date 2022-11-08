import { useState } from 'react'
import Router from 'next/router'

const PostCreate = () => {
    const [isLoading, setLoading] = useState(false)
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // const [validation, setValidation] = useState({})

    const handleFileChange = (e: any) => {
        const imageData = e.target.files[0]
        if (!imageData.type.match('image.*')) {
            setImage('')
            return
        }
        setImage(imageData)
    }
    const storePost = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('content', content)

        const fOption = {
            method: 'POST',
            body: formData,
        }

        // penggunaan then vs  => Router.push()
        // if (!response.ok) { => SinglePage

        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`, fOption).then(() => {
            Router.push('/posts')
        }).catch((error) => {
            console.log(error)
            //     setValidation(error.response.data)
        })

    }

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <form onSubmit={storePost}>

                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Image</label>
                                    <input type="file" className="form-control" onChange={handleFileChange} />
                                </div>
                                {/* {validation.image && (
                                    <div className="alert alert-danger">
                                        {validation.image}
                                    </div>
                                )} */}

                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="input title" />
                                </div>
                                {/* {validation.title &&
                                    <div className="alert alert-danger">
                                        {validation.title}
                                    </div>} */}

                                <div className="form-group mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="input content" />
                                </div>
                                {/* {validation.content &&
                                    <div className="alert alert-danger">
                                        {validation.content}
                                    </div>} */}

                                <button className="btn btn-primary border-0 shadow-sm" type="submit">
                                    save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostCreate
