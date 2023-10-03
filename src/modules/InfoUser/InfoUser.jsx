import React, { useEffect, useState } from 'react'
import sty from './style.module.scss'
import dilorom from '../../image/dilorom.png'
import PostCard from '../../components/PostCard/PostCard'
import { Link, useLocation, useParams } from 'react-router-dom'
import request from '../../services/httpRequest'
export default function InfoUser() {
    const { userId } = useParams()

    let { pathname } = useLocation()
    pathname = pathname.substring(1)

    const [post, setPost] = useState({})
    useEffect(() => {
        request.get(`/posts/${userId}`)
            .then(res => {
                setPost(res)
            })
    }, [])


    const [user, setUser] = useState({})
    useEffect(() => {
        if (post?.userId) {
            request.get(`/users/${post?.userId}`)
                .then(res => {
                    setUser(res)
                })
        }
    }, [post?.userId])
    console.log(post);



    return (
        <div className='container'>
            <div className={sty.InfoUser}>
                <div>
                    <Link to='/(${isValidJSON(user?.image) ? user?.image : dilorom}' onClick={() => window.open('/(${isValidJSON(user?.image) ? user?.image : dilorom}', '_blank')}> <img src={post?.image} alt="photo user" /></Link>
                </div>
                <div className={sty.info}>
                    <h2 className={sty.name}>{post?.name}</h2>

                    <tr>
                        <td>Карьера</td>
                        <td>{post?.career}</td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td>{post?.date}</td>
                    </tr>
                    <tr>
                        <td>Место рождения</td>
                        <td>{post?.place}</td>
                    </tr>
                </div>
            </div>
            <h2>ПУБЛИКАЦИИ</h2>
            <div className={sty.newpost}>

                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}
